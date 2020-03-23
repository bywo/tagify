import theme from "../theme";
import { useRef } from "react";

export default function SearchInput({
  placeholder,
  value,
  children,
  onChange,
  style,
  inputStyle,
}: {
  placeholder: string;
  value: string;
  children?: React.ReactNode;
  onChange: (v: string) => void;
  style?: React.CSSProperties;
  inputStyle?: React.CSSProperties;
}) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "baseline",
        background: "#e5e5e5",
        border: "none",
        borderRadius: theme.borderRadius.s,
        padding: `${theme.spacing.s}px`,
        ...style,
      }}
      onClick={() => inputRef.current && inputRef.current.focus()}
    >
      {children}
      <input
        ref={inputRef}
        value={value}
        onChange={e => {
          onChange(e.target.value);
        }}
        placeholder={
          !value &&
          (!children || (Array.isArray(children) && children.length === 0))
            ? placeholder
            : " "
        }
        style={{
          outline: "none",
          padding: 0,
          paddingLeft: 3,
          border: "none",
          fontStyle: "italic",
          fontWeight: 500,
          fontSize: theme.fontSizes.m,
          background: "#e5e5e5",
          lineHeight: "22px",
          flexGrow: 1,
          flexBasis: 0,
          minWidth: 100,
          ...inputStyle,
        }}
      />
    </div>
  );
}
