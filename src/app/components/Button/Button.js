import React from "react";
import "./Button.scss";

const Button = ({ classAddon, text, handleClick }) => {
  return (
    <div className={`buttonWrap ${classAddon || ""}`}>
      <button className="button" onClick={handleClick}>{text || "Button"}</button>
    </div>
  )
};

export default Button;
