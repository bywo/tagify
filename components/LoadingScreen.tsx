import useTimeout from "@rooks/use-timeout";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [showBlurb, setShowBlurb] = useState(false);
  const { start } = useTimeout(() => setShowBlurb(true), 3000);
  useEffect(() => {
    start();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        height: "100%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 48,
        background: "#fff",
      }}
    >
      <img src="/static/loading.svg" />
      <div style={{ fontWeight: 600, fontSize: 24 }}>Loading</div>
      <div
        style={{
          marginTop: 24,
          textAlign: "center",
          color: "#666",
          visibility: showBlurb ? "visible" : "hidden",
        }}
      >
        This may take a while if you have a large library
      </div>
    </div>
  );
}
