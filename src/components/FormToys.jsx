import React from "react";
import { useForm } from "react-hook-form";

export default function FormToys() {
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
      <h2>Toys form:</h2>
      <form onSubmit={handleSubmit(onSubForm)} id="id_form">
        <label>name</label>
        <input
          {...register("name", { required: true, minLength: 2 })}
          className="form-control"
          type="text"
        />
        {errors.name && <div className="text-danger">* Enter valid name</div>}
        <label>price</label>
        <input
          {...register("price", { required: true, min: 1, max: 1000 })}
          className="form-control"
          type="number"
        />
        {errors.price && <div className="text-danger">* Enter valid price</div>}
        <label>info</label>
        <textarea
          {...register("info", { required: true, minLength: 2 })}
          className="form-control"
          type="textarea"
        ></textarea>
        {errors.info && <div className="text-danger">* Enter valid info</div>}
        <label>img_url</label>
        <input
          {...register("img_url", { required: false, minLength: 2 })}
          className="form-control"
          type="text"
        />
        {errors.img_url && (
          <div className="text-danger">* Enter valid img_url</div>
        )}
        <button>submit</button>
      </form>
    </div>
  );
}
