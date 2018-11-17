import randomMC from "random-material-color";

export default ({ id, name, style }) => (
  <div
    style={{
      display: "inline-block",
      padding: "4px 8px",
      borderRadius: "100px",
      fontSize: "14px",
      color: "white",
      background: randomMC.getColor({ text: id }),
      whiteSpace: "nowrap",
      ...style
    }}
  >
    {name}
  </div>
);
