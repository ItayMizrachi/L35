import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { API_URL, doApiGet, doApiMethod } from "../../services/apiService";

export default function AddVideo() {
  const {
    register,
    setValue,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [categories, setCategories] = useState([]);
  const nav = useNavigate();
  const videoRef = useRef();

  useEffect(() => {
    doApiCategory();
  }, []);

  const doApiCategory = async () => {
    try {
      const url = API_URL + "/categories";
      const data = await doApiGet(url);
      console.log(data);
      setCategories(data);
    } catch (error) {
      console.log(error);
    }
  };

  const onSubForm = (_bodyData) => {
    console.log(_bodyData);
    doApiPost(_bodyData);
  };

  const doApiPost = async (_bodyData) => {
    try {
      const url = API_URL + "/videos";
      const data = await doApiMethod(url, "POST", _bodyData);
      if (data._id) {
        toast.success("Video added");
        nav("/admin/videos");
      }
    } catch (error) {
      console.log(error);
      alert("there problem");
    }
  };

  const onVideoChange = () => {
    // מקבל את היו אר אל של הוידיאו
    const video_url = getValues("video_url");
    console.log(video_url);
    // מחפשים איפה נמצא הוי בקווארי שבתוכו יש את הקוד של הוידאו
    const vIndex = video_url.indexOf("?v=");
    // אוספים רק את הוידיאו קוד
    const videoCode = video_url.substring(vIndex + 3, 99999);
    console.log(videoCode);
    const urlImg = `https://i.ytimg.com/vi/${videoCode}/hqdefault.jpg`;
    // מגדיר לאינפוט ערך חדש
    setValue("img_url", urlImg);
  };

  return (
    <div className="container">
      <h2>Add new video</h2>
      {categories.length > 0 ? (
        <form onSubmit={handleSubmit(onSubForm)} className="col-md-6 p-2">
          <label>Title</label>
          <input
            {...register("title", { required: true, minLength: 2 })}
            className="form-control"
            type="text"
          />
          {errors.title && (
            <div className="text-danger">* Enter valid title</div>
          )}
          <label>Info of video</label>
          <textarea
            {...register("info", { required: true, minLength: 2 })}
            className="form-control"
            type="textarea"
          ></textarea>
          {errors.info && <div className="text-danger">* Enter valid info</div>}
          <label>Video URL</label>
          {/* כאשר נעזוב את האינפוט יפעיל את האירוע 
      שיצור לתמונה יו אר אל משל עצמה לפי התמונה */}
          <input
            onBlurCapture={onVideoChange}
            {...register("video_url", { required: true, minLength: 2 })}
            className="form-control"
            type="text"
          />
          {errors.video_url && (
            <div className="text-danger">* Enter valid video_url</div>
          )}

          <label>Category</label>
          <select
            {...register("category_code", { required: true, minLength: 2 })}
            className="form-select"
            type="select"
          >
            {categories.map((item) => {
              return (
                <option key={item._id} value={item.url_code}>
                  {item.name}
                </option>
              );
            })}
          </select>
          <label>Image URL</label>
          <input
            {...register("img_url", { required: true, minLength: 2 })}
            className="form-control"
            type="text"
          />
          {errors.img_url && (
            <div className="text-danger">* Enter valid img_url</div>
          )}
          <button className="btn btn-success mt-3">Add video</button>
        </form>
      ) : (
        <h2>Lodaing...</h2>
      )}
    </div>
  );
}

// https://www.youtube.com/watch?v=iXri4xxHmKE
// https://i.ytimg.com/vi/iXri4xxHmKE/hqdefault.jpg
