import { useRef } from "react";

const usePost = (endpoint, formData) => {
  let response = null;
  const postData = async (formData) => {
    const baseUrl = process.env.baseUrl;
    await fetch(`${baseUrl + endpoint}`, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + window.localStorage.getItem("token"),
      },
      body: formData,
    })
      .then((res) => {
        response = res;
        return response;
      })
      .catch((err) => console.log(err));
    return response;
  };

  const res = postData(formData, ref);

  return res;
};

export default usePost;
