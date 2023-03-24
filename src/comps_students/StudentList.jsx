import React, { useContext } from "react";
import { MyContext } from "../context/myContext";

export default function StudentsList() {
  const { students_ar } = useContext(MyContext);

  return (
    <div className="mt-4">
      <h2>Studets list:</h2>
      <ul>
        {students_ar.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
