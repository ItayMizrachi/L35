import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { URL_API } from "../Services/apiSercice";

export default function EditHumanPage() {
  const params = useParams();
  const [info, setInfo] = useState({});
  const nav = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    doApiInit();
  }, []);

  const onSubForm = (_bodyData) => {
    console.log(_bodyData);
    doApiPut(_bodyData);
  };
  // שעושים בקשות עריכה , צריך קודם לאסוף את המידע הקיים לתוך
  // האינפוטים
  const doApiInit = async () => {
    try {
      const url = URL_API + "/humans/single/" + params["id"];
      const resp = await axios.get(url);
      console.log(resp.data);
      setInfo(resp.data);
    } catch (err) {
      console.log(err);
      alert("There problem");
    }
  };

  const doApiPut = async (_bodyData) => {
    const url = URL_API + "/humans/" + params["id"];
    try {
      const resp = await axios({
        url: url,
        method: "PUT",
        data: _bodyData,
      });
      // בודק אם קיבלנו איידי ככה אנחנו יודעים שהוא הצליח להוסיף בוודאות
      if (resp.data.modifiedCount) {
        alert("Human Updated");
        // משגר אותו לכתובת של הרשימה של הבני אנוש
        nav("/humans");
      }
    } catch (err) {
      console.log(err);
      alert("There problem");
    }
  };

  return (
    <div className="container">
      <h1>Edit human form:</h1>
      {info.name ? (
        <form onSubmit={handleSubmit(onSubForm)} className="col-md-6">
          <label>name</label>
          <input
            defaultValue={info.name}
            {...register("name", { required: true, minLength: 2 })}
            className="form-control"
            type="text"
          />
          {errors.name && <div className="text-danger">* Enter valid name</div>}

          <label>info</label>
          <textarea
            rows="5"
            defaultValue={info.info}
            {...register("info", { required: true, minLength: 2 })}
            className="form-control"
            type="textarea"
          ></textarea>
          {errors.info && <div className="text-danger">* Enter valid info</div>}

          <label>Birth year</label>
          <input
            defaultValue={info.birth_year}
            {...register("birth_year", { required: true, minLength: 4 })}
            className="form-control"
            type="number"
          />
          {errors.birth_year && (
            <div className="text-danger">* Enter valid birth_year</div>
          )}

          <label>Img url</label>
          <input
            defaultValue={info.img_url}
            {...register("img_url", { required: false, minLength: 2 })}
            className="form-control"
            type="text"
          />
          {errors.img_url && (
            <div className="text-danger">* Enter valid img_url</div>
          )}
          <button className="btn btn-warning mt-3">Update</button>
        </form>
      ) : (
        <h2>Loading..</h2>
      )}
    </div>
  );
}
