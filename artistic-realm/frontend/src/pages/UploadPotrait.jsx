import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ImageControle = () => {
  const navigate = useNavigate();
  // const userdetail = localStorage.getItem("user3");

  let [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState("");
  // let [name,setName] = useState('');
  // name = imagename;

  const params = useParams();

  const inputHandler = (e) => {
    setName(e.target.value);
  };
  const inputHandlerdesc = (e) => {
    setDesc(e.target.value);
  };
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const submitpic = () => {
    // console.log(name, desc, image, 19);
    const formdata = new FormData();
    formdata.append("name", name);
    formdata.append("desc", desc);
    formdata.append("image", image);
    axios
      .post(`${BASE_URL}/upload/${params}`, formdata, {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.code === 403 && res.data.message === "Token Expired") {
          localStorage.setItem("token", null);
        }
      })
      .catch((err) => {
        console.log(err, "error has occured");
      });
    // const auth = localStorage.getItem("user3");
    localStorage.clear();
    navigate("/Admin");
  };

  const DeletePic = async () => {
    // console.log(name);
    let data = await fetch(
      `${BASE_URL}/remove/${params.id}`,
      {
        method: "DELETE",
        body: JSON.stringify({ name }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    data = await data.json();
    // console.log(data);
    if (data) {
      toast("Successfully Deleted");
    } else {
      toast("choose another name");
    }
  };

  return (
    <div className="upload-delete-container">
      <div className="admin-upload">
        <h1>Upload Image</h1>
        <input
          className="upload-signupBox"
          placeholder="Enter name"
          value={name}
          onChange={inputHandler}
        />
        <input
          className="upload-signupBox"
          placeholder="Enter Description"
          value={desc}
          onChange={inputHandlerdesc}
        />
        <input
          className="img-file"
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <button className="btn3" onClick={submitpic} type="button">
          Submit
        </button>
      </div>
      <div className="admin-upload">
        <h1>Delete Image</h1>
        <input
          className="delete-signupBox"
          placeholder="Enter Image name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button className="btn4" onClick={DeletePic} type="button">
          Submit
        </button>

        <ToastContainer />
      </div>
    </div>
  );
};
export default ImageControle;
