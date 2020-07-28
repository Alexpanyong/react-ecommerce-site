import React from "react";
import "./Loading.scss";

const Loading = ({ text = "Loading..." }) => {
  return (
    <div className="loadingWrap">
      {text}
    </div>
  )
}

export default Loading;
