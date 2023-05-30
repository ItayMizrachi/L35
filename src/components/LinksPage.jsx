import React from "react";
import { useForm } from "react-hook-form";
import LinksList from "./links/LinksList";

export default function LinksPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubForm = (_bodyData) => {
    console.log(_bodyData);
  };

  return (
    <div className="container">
      <h1>Links page</h1>
      <LinksList />
      <form
        onSubmit={handleSubmit(onSubForm)}
        className="col-md-6 mx-auto border p-2"
      >
        <h2>Add new link</h2>
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
        <div className="text-center mt-3">
          <button className="btn btn-dark">Add link</button>
        </div>
      </form>
    </div>
  );
}
