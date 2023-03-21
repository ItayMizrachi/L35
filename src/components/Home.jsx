import React, { useState } from "react";
import Div from "./Div";

export default function Home() {
  const [flag, setFlag] = useState(0);
  return (
    <>
      {flag ? <Div flag={flag} /> : true}
      <button className="btn btn-info" onClick={() => setFlag(flag + 1)}>
        Click
      </button>
    </>
  );
}
