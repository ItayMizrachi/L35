import { useState } from "react";

export const useNum = (_initVal) => {
  const [num, setNum] = useState(_initVal);

  const add1Num = () => {
    setNum(num + 1);
  }

  const minus1Num = () => {
    setNum(num - 1);
  }

  const resetNum = () => {
    setNum(0);
  }

  return { num, add1Num, minus1Num, resetNum };
};
