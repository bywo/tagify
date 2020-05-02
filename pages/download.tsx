import { downloadLibrary } from "../util/downloadLibrary";
import { useEffect, useState } from "react";
import Router from "next/router";
import { misc } from "../data/db";

export default function Download() {
  const [didError, setDidError] = useState(false);
  useEffect(() => {
    async function main() {
      const matches = /access_token=([^&]+)(&|$)/.exec(window.location.hash);
      if (matches) {
        await misc.put(matches[1], "token");
      }

      try {
        await downloadLibrary();
      } catch (e) {
        if (e.message === "Unauthenticated") {
          Router.push("/login?redirectTo=/download");
        } else {
          setDidError(true);
          throw e;
        }
      }
    }
    main();
  }, []);
  return (
    <div>
      {didError ? "An error occured. Contact Byron." : "Generating CSV"}
    </div>
  );
}
