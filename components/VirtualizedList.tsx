import { useState, useRef, useCallback, useMemo } from "react";
import useResizeObserver from "use-resize-observer/polyfilled";
import * as _ from "lodash";

let globalCounter = 0;

export default function VirtualizedList<T>({
  style,
  items,
  renderItem,
}: {
  style: any;
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}) {
  const [scrollY, setScrollY] = useState(0);
  const [, setCounter] = useState(0);
  const measurements = useRef<number[]>([]);
  const averageHeight = useRef<number>(10);

  const update = useCallback(() => {
    averageHeight.current =
      _.sum(measurements.current) / Object.keys(measurements.current).length;
    setCounter(++globalCounter);
  }, [setCounter]);
  const throttledUpdate = useMemo(() => _.debounce(update), [setCounter]);
  const { ref, width, height } = useResizeObserver<HTMLDivElement>({});

  const windowTop = scrollY;
  const windowBottom = scrollY + (height || 0);

  let top = 0;
  let i = 0;
  while (top < windowTop) {
    top += measurements.current[i] || averageHeight.current;
    i++;
  }
  const firstItemIndex = Math.max(0, i - 1);
  let offsetTop = 0;
  for (let i = 0; i < firstItemIndex; i++) {
    offsetTop += measurements.current[i] || averageHeight.current;
  }

  let lastItemIndex = firstItemIndex + 10;
  if (height) {
    while (top < windowBottom) {
      top += measurements.current[i] || averageHeight.current;
      i++;
    }
    lastItemIndex = Math.min(items.length, i + 1);
  }

  const itemsToRender = items.slice(firstItemIndex, lastItemIndex);

  const onMeasure = useCallback(
    (index: number, height: number) => {
      const last = measurements.current[index];
      if (last != height) {
        measurements.current[index] = height;
        throttledUpdate();
      }
    },
    [measurements],
  );

  return (
    <div
      ref={ref}
      style={{ ...style, overflow: "auto" }}
      onScroll={e => {
        if (e.target === e.currentTarget) {
          setScrollY(e.currentTarget.scrollTop);
        }
      }}
    >
      <div
        style={{
          position: "relative",
          height: averageHeight.current * items.length,
        }}
      >
        {itemsToRender.map((item, i) => {
          const ret = (
            <VirtualizedItem
              key={firstItemIndex + i}
              item={item}
              index={firstItemIndex + i}
              renderItem={renderItem}
              onMeasure={onMeasure}
              style={{
                position: "absolute",
                top: offsetTop,
                width: "100%",
                // transform: `translateY(${offsetTop}px)`,
              }}
            />
          );

          offsetTop +=
            measurements.current[firstItemIndex + i] || averageHeight.current;

          return ret;
        })}
      </div>
    </div>
  );
}

function VirtualizedItem<T>({
  index,
  item,
  renderItem,
  onMeasure,
  style,
}: {
  index: number;
  item: T;
  renderItem: (item: T) => React.ReactNode;
  onMeasure: (index: number, height: number) => void;
  style: any;
}) {
  const { ref } = useResizeObserver<HTMLDivElement>({
    onResize: size => onMeasure(index, size.height),
  });
  return (
    <div ref={ref} style={style}>
      {renderItem(item)}
    </div>
  );
}
