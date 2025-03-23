import React, { useEffect, useState } from "react";
import axios from "axios";

import fileDownload from "js-file-download";

import "./listpotrait.css";

// import { isHtmlElement } from 'react-router-dom/dist/dom';
const ShowPotraits = () => {
  const [data, setData] = React.useState([]);
  // const navigate = useNavigate();
  // let [name, setName] = useState('');
  useEffect(() => {
    getPotrait();
  }, []);

  const getPotrait = () => {
    axios
      .get("https://pentart-app.vercel.app/potrait")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err, "error has occured"));
  };
  // const numbers = [1, 2, 3, 4, 5];
  // let count = 0;

  const searchPotrait = async (event) => {
    let key = event.target.value;
    console.log(key);
    if (key) {
      let result = await fetch(`https://pentart-app.vercel.app/search/${key}`);
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
    console.log(myURL);

    axios({
      url: "https://pentart-app.vercel.app/download",
      method: "POST",
      responseType: "blob",
      data: JSON.stringify({ myURL }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((resp) => {
      console.log(resp);
      fileDownload(resp.data, "downloaded123.png");
    });

    let result = await fetch("https://pentart-app.vercel.app/download", {
      method: "post",
      responseType: "blob",
    });

    result = await result.json();
    console.log(result);
    fileDownload(result.data, "downloaded123.png");
  }

  return (
    // <div className='uploaded-potrait'>

    //     {
    //         data.map((singleData, index) => {
    //             return (

    //                 <div className="image-3" key={index + 1}>
    //                     <div className='all-images'>

    //                         {/* {console.log(singleData.name)} */}

    //                     </div>
    //                     <div className='all-names'>
    //                         <h1>{singleData.name}</h1>
    //                         <h2>{singleData.desc}</h2>

    //                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ratione, aspernatur possimus eos fuga a sint
    //                             velit, esse maxime iste tenetur libero, praesentium officiis quae porro necessitatibus ducimus quibusdam
    //                             obcaecati ex alias at doloremque eius id! Amet et iure, natus eum nisi porro corrupti asperiores earum
    //                             voluptates fugiat vero aut iste. Libero odit dolorum eum deserunt deleniti iusto aliquam non qui porro totam
    //                             animi doloremque quibusdam quae explicabo quam provident maiores quidem, eos autem temporibus ad. Accusamus
    //                             dignissimos officia illo, voluptas illum laudantium doloremque enim dolor labore quos inventore assumenda ipsa
    //                             culpa optio repudiandae ad. Officiis aliquam facere velit sed.</p>

    //                     </div>

    //                 </div>
    //             )
    //         })
    //     }
    // </div>
    <div>
      <input
        type="text"
        placeholder="Search Box"
        className="searchBox"
        onChange={searchPotrait}
      />
      <div className="flex">
        {data.length > 0
          ? data.map((singledata, singleIndex) => {
              return (
                <div className="card">
                  <div>
                    {/* <h3 className='name-h3'>{singledata?.name}</h3> */}
                    <img
                      src={`https://pentart-app.vercel.app/${singledata?.imgUrl}`}
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

// export default ShowPotraits;
