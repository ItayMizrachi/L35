import React, { useEffect } from "react";
import { API_URL, doApiGet } from "../services/apiService";

const UsersList = () => {
  useEffect(() => {
    doApi();
  }, []);

  const doApi = async () => {
    const url = API_URL + "users/usersList";
    try {
      const data = await doApiGet(url);
      console.log(data);
    } catch (error) {
      console.log(error.response);
    }
  };

  return <div>UsersList</div>;
};

export default UsersList;
