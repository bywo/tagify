import { Stream, MemoryStream } from "xstream";
import { useEffect, useState } from "react";

export default function useXstream<T>(s: Stream<T>): T | undefined;
export default function useXstream<T>(s: Stream<T>, initialValue: T): T;
export default function useXstream<T>(s: Stream<T>, initialValue?: T) {
  const [value, update] = useState(initialValue);

  useEffect(() => {
    const subscriber = s.subscribe({
      next: update,
    });

    return () => {
      subscriber.unsubscribe;
    };
  }, [s, update]);

  return value;
}
