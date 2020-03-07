import React from "react";
import VirtualizedList from "../components/VirtualizedList";
import * as _ from "lodash";

const items = _.range(0, 1000);

function Item(item: number) {
  return <div>{item}</div>;
}

export default function Virtual() {
  return (
    <VirtualizedList
      style={{ width: "100vw", height: "100vh" }}
      items={items}
      renderItem={Item}
    />
  );
}
