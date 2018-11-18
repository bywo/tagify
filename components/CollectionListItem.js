export default ({ name, selected, ...rest }) => (
  <div
    className={`root ${selected ? "selected" : ""}`}
    style={{
      padding: "4px 8px",
    }}
    {...rest}
  >
    {name}
    <style jsx>{`
      .root:hover {
        background: gray;
      }

      .root.selected {
        background: black;
        color: white;
      }
    `}</style>
  </div>
);
