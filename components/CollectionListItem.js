import React from "react";
import theme from "../theme";

export default ({ name, selected, ...rest }) => (
  <div
    className={`root ${selected ? "selected" : ""}`}
    style={{
      padding: `0 ${theme.spacing.m}px`,
    }}
    {...rest}
  >
    <div
      style={{
        padding: `${theme.spacing.s}px ${theme.spacing.m}px`,
        borderRadius: theme.borderRadius.s,
        cursor: "pointer",
      }}
    >
      {name}
    </div>
    <style jsx>
      {`
        .root div {
          color: ${theme.colors.darkTextMedEmphasis};
        }

        .root:hover div {
          background: ${theme.colors.primaryLight};
          color: ${theme.colors.darkTextHighEmphasis};
        }

        .root.selected div {
          background: ${theme.colors.primary};
          color: ${theme.colors.lightTextHighEmphasis};
        }
      `}
    </style>
  </div>
);
