import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { add } from "../../features/linksSlice";

export default function LinksForm() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isFormShow, setIsFormShow] = useState(false);

  const onSubForm = (_bodyData) => {
    console.log(_bodyData);
    dispatch(add({ newLink: _bodyData }));
  };

  return (
    <div>
      <div className="text-center"></div>
      {isFormShow && (
        <form
          onSubmit={handleSubmit(onSubForm)}
          className="col-md-6 mx-auto border p-2"
        >
          <h2>-Add new link</h2>
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
      )}
      <button
        onClick={() => setIsFormShow(!isFormShow)}
        className="btn btn-dark mb-3"
      >
        Show/Hide form
      </button>
    </div>
  );
}
