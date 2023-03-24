import React, { useContext, useRef } from "react";
import { MyContext } from "../context/myContext";

export default function StudentForm() {
  const { addStudent } = useContext(MyContext);
  const inputRef = useRef();

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          let input_val = inputRef.current.value;
          if (input_val.length > 2) {
            addStudent({
              name: input_val,
              id: Date.now(),
            });
          }
        }}
        className="col-md-6"
      >
        <label>Name of student:</label>
        <input ref={inputRef} type="text" className="form-control" />
        <button className="btn btn-info mt-2">Add</button>
      </form>
    </div>
  );
}
