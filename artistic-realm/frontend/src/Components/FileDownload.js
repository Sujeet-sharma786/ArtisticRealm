import React from "react";
import Axios from "axios";

import fileDownload from "js-file-download";

const DownloadControle = () => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const Download = () => {
    Axios({
      url: `${BASE_URL}/download`,
      method: "GET",
      responseType: "blob",
    }).then((resp) => {
      console.log(resp);
      fileDownload(resp.data, "downloaded.png");
    });
  };

  return (
    <div>
      <button
        onClick={(e) => {
          Download(e);
        }}
        type="button"
      >
        Download
      </button>
    </div>
  );
};

export default DownloadControle;
