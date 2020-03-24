const randomMC = require("random-material-color");
import Close from "@material-ui/icons/Close";

export default ({
  id,
  name,
  style,
  onMouseDown,
  onClick,
  icon,
}: {
  id: string;
  name: string;
  style?: any;
  onMouseDown?: (e: React.MouseEvent<HTMLDivElement>) => void;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  icon?: "close";
}) => (
  <div
    style={{
      ...baseStyles,
      background: randomMC.getColor({ text: id }),
      cursor: onClick ? "pointer" : undefined,
      ...style,
    }}
    onMouseDown={onMouseDown}
    onClick={onClick}
  >
    {name}
    {icon === "close" ? (
      <Close style={{ marginLeft: 3, marginRight: -3 }} fontSize="inherit" />
    ) : null}
  </div>
);

export const baseStyles: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  borderRadius: "6px",
  color: "white",
  fontSize: "14px",
  whiteSpace: "nowrap",
  overflow: "hidden",
  padding: "3px 9px",
  textOverflow: "ellipsis",
  boxSizing: "border-box",
  lineHeight: "1.2",
  fontWeight: 500,
  fontStyle: "italic",
};
