import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { URL_API } from "../Services/apiSercice";

export default function AddHumanPage() {
  const nav = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubForm = (_bodyData) => {
    console.log(_bodyData);
    doApiPost(_bodyData);
  };

  const doApiPost = async (_bodyData) => {
    const url = URL_API + "/humans";
    try {
      const resp = await axios({
        url: url,
        method: "POST",
        data: _bodyData,
      });
      // בודק אם קיבלנו איידי ככה אנחנו יודעים שהוא הצליח להוסיף בוודאות
      if (resp.data._id) {
        alert("Human added");
        nav("/humans");
      }
    } catch (err) {
      console.log(err);
      alert("There problem");
    }
  };

  return (
    <div className="container">
      <h1>Add new human form:</h1>
      <form onSubmit={handleSubmit(onSubForm)} className="col-md-6">
        <label>name</label>
        <input
          {...register("name", { required: true, minLength: 2 })}
          className="form-control"
          type="text"
        />
        {errors.name && <div className="text-danger">* Enter valid name</div>}

        <label>info</label>
        <textarea
          {...register("info", { required: true, minLength: 2 })}
          className="form-control"
          type="textarea"
        ></textarea>
        {errors.info && <div className="text-danger">* Enter valid info</div>}

        <label>Birth year</label>
        <input
          {...register("birth_year", { required: true, minLength: 4 })}
          className="form-control"
          type="number"
        />
        {errors.birth_year && (
          <div className="text-danger">* Enter valid birth_year</div>
        )}

        <label>Img url</label>
        <input
          {...register("img_url", { required: false, minLength: 2 })}
          className="form-control"
          type="text"
        />
        {errors.img_url && (
          <div className="text-danger">* Enter valid img_url</div>
        )}
        <button className="btn btn-success mt-3">Add new</button>
      </form>
    </div>
  );
}
