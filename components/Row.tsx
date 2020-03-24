export default function Row({
  children,
  onClick,
  onMouseDown,
  actionIcon,
}: {
  children: React.ReactNode;
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
  onMouseDown?: (e: React.MouseEvent<HTMLDivElement>) => void;
  actionIcon: React.ReactNode;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: 12,
        borderBottom: "solid 1px #ddd",
        cursor: "pointer",
      }}
      onClick={onClick}
      onMouseDown={onMouseDown}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flexGrow: 1,
          flexBasis: 0,
          flexShrink: 1,
          minWidth: 0, // needed to get children to shrink
        }}
      >
        {children}
      </div>
      <div style={{ lineHeight: 0, marginLeft: 12 }}>{actionIcon}</div>
    </div>
  );
}
