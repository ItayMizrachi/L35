import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { API_URL, doApiMethod, TOKEN_KEY } from "../services/apiService";

export default function LoginAdmin() {
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
    try {
      const url = API_URL + "/users/login";
      // const resp = await axios({
      //   method:"POST",
      //   url:url,
      //   data:_bodyData
      // })
      const data = await doApiMethod(url, "POST", _bodyData);
      console.log(data);
      if (data.token) {
        localStorage.setItem(TOKEN_KEY, data.token);
        nav("/admin/users");
      }
    } catch (err) {
      console.log(err);
      alert("User or password is worng!");
    }
  };

  return (
    <div className="container">
      <h1 className="display-4 text-center">Login to admin</h1>
      <form
        className="col-md-6 p-2 border mx-auto"
        onSubmit={handleSubmit(onSubForm)}
      >
        <label>email</label>
        <input
          {...register("email", {
            required: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          })}
          className="form-control"
          type="text"
        />
        {errors.email && <div className="text-danger">* Enter valid email</div>}
        <label>password</label>
        <input
          {...register("password", { required: true, minLength: 3 })}
          className="form-control"
          type="text"
        />
        {errors.password && (
          <div className="text-danger">
            * Enter valid password (min 3 chars)
          </div>
        )}
        <div className="text-center">
          <button className="btn btn-dark mt-3 ">Log in</button>
        </div>
      </form>
    </div>
  );
}
