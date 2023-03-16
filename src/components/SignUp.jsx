import React from "react";
import { useForm } from "react-hook-form";

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSub = (_bodyDate) => {
    console.log(_bodyDate);
  };

  return (
    <div className="container">
      <h2>Sign up form</h2>
      <form onSubmit={handleSubmit(onSub)} className="col-md-6 p-2">
        <label>Name:</label>
        <input
          {...register("name", { required: true, minLength: 2 })}
          type="text"
          className="form-control"
        />
        {errors.name && (
          <div className="text-danger">* Enter valid name (min 2 chars)</div>
        )}

        <label>Email:</label>
        <input
          {...register("email", {
            required: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          })}
          type="text"
          className="form-control"
        />

        {errors.email && <div className="text-danger">* Enter valid Email</div>}
        <label>Password:</label>
        <input
          {...register("password", { required: true, minLength: 3 })}
          type="text"
          className="form-control"
        />

        {errors.password && (
          <div className="text-danger">
            * Enter valid Password (min 3 chars)
          </div>
        )}
        <button className="btn btn-info mt-3">Sign up</button>
      </form>
    </div>
  );
}
