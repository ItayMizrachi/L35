import React, { useEffect } from "react";

export default function Div({ flag }) {
  useEffect(() => {
    console.log("callback called");
    return () => {
      console.log("retCallback called");
    };
  }, [flag]);
  return <div style={{ width: 200, height: 200, background: "red" }}>Div</div>;
}
