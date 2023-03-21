import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { MyContext } from "../context/myContext";

export default function FavForm() {
  const { resetFav, addFav } = useContext(MyContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubForm = (_bodyData) => {
    console.log(_bodyData);
    _bodyData.id = Date.now();
    addFav(_bodyData);
  };

  return (
    <div className="container">
      <h2>Add new link form</h2>
      <form onSubmit={handleSubmit(onSubForm)} className="col-md-6 p-2">
        <label>name</label>
        <input
          {...register("name", { required: true, minLength: 2 })}
          className="form-control"
          type="text"
        />
        {errors.name && <div className="text-danger">* Enter valid name</div>}
        <label>link</label>
        <input
          {...register("link", { required: true, minLength: 2 })}
          className="form-control"
          type="text"
        />
        {errors.link && <div className="text-danger">* Enter valid link</div>}
        <label>Subject</label>
        <select
          {...register("subject", { required: true, minLength: 2 })}
          className="form-select"
          type="select"
        >
          <option value="js">Js</option>
          <option value="react">React</option>
          <option value="ai"> Ai</option>
          <option value="nodejs">Node Js</option>
          <option value="general">General</option>
        </select>
        <button className="btn btn-info me-2 mt-2">submit</button>
        <button
          onClick={resetFav}
          type="button"
          className="btn btn-danger mt-2"
        >
          Reset
        </button>
      </form>
    </div>
  );
}
