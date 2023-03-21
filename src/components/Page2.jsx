import React, { useEffect, useState } from "react";

export default function Page2() {
  const [timer, setTimer] = useState(1);

  useEffect(() => {
    // const interId = setInterval(() => {
    //   setTimer(timer + 1);
    // }, 1000);

    // setTimeout(() => {
    //   clearInterval(interId);
    // }, 1000);
    setTimeout(() => {
      setTimer(timer + 1);
    }, 1000);
  }, [timer]);

  //   useEffect(() => {
  //     setInterval(() => {
  //       setTimer((last) => last + 1);
  //     }, 1000);
  //   }, []);

  console.log(timer);

  return <h2>{timer}</h2>;
}
