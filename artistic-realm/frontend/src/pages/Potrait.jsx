import React, { useEffect, useState } from "react";
import axios from "axios";

import fileDownload from "js-file-download";

import "./listpotrait.css";
import { BiSearch } from "react-icons/bi";

// import { isHtmlElement } from 'react-router-dom/dist/dom';
const ShowPotraits = () => {
  const [data, setData] = useState([]);
  // const navigate = useNavigate();
  // let [name, setName] = useState('');
  useEffect(() => {
    getPotrait();
  }, []);
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const getPotrait = () => {
    axios
      .get(`${BASE_URL}/potrait`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err, "error has occured"));
  };
  // const numbers = [1, 2, 3, 4, 5];
  // let count = 0;

  const searchPotrait = async (key) => {
    // console.log("my key is", key);
    if (key) {
      let result = await fetch(`${BASE_URL}/search/${key}`);
      result = await result.json();
      if (result) {
        setData(result);
      }
    } else {
      getPotrait();
    }
  };
  // const DownloadImg = async (Value) => {
  //     let key = Value;

  //     let result = await fetch("http://localhost:5000/download", {
  //         method: "post",
  //         responseType: "blob",
  //         body: JSON.stringify({ name })
  //     })

  //     result = await result.json();
  //     console.log(result);
  //     fileDownload(result.data, "downloaded123.png");
  // }

  async function DownloadImg(e) {
    let myURL = e.currentTarget.getAttribute("data-value");
    // console.log(myURL);

    axios({
      url: `${BASE_URL}/download`,
      method: "POST",
      responseType: "blob",
      data: JSON.stringify({ myURL }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((resp) => {
      // console.log(resp);
      fileDownload(resp.data, "downloaded123.png");
    });

    let result = await fetch(`${BASE_URL}/download`, {
      method: "post",
      responseType: "blob",
    });

    result = await result.json();
    // console.log(result);

    fileDownload(result.data, "downloaded123.png");
  }

  return (
   
    <div>
      <div className="search-box">
        <input
          type="text"
          placeholder="Search Box"
          className="searchBox"
          onChange={(e) => searchPotrait(e.target.value)}
        />
        <div className="searchicon1">
          <BiSearch color="white" onClick={searchPotrait} />
        </div>
      </div>

      <div className="flex">
        {data.length > 0
          ? data.map((singledata, singleIndex) => {
              return (
                <div className="card">
                  <div>
                    {/* <h3 className='name-h3'>{singledata?.name}</h3> */}
                    <img
                      src={`${BASE_URL}/${singledata?.imgUrl}`}
                      alt="..."
                      width="150"
                    />
                    <div className="btn-div">
                      <button
                        className="btn2"
                        data-value={singledata?.imgUrl}
                        onClick={DownloadImg}
                        type="button"
                        fileDownload
                      >
                        Download
                      </button>
                    </div>
                    {/* <h3 className='desc'>{singledata?.desc}</h3> */}
                  </div>
                </div>
              );
            })
          : "no Data Found"}
      </div>
    </div>
  );
};

export default ShowPotraits;
