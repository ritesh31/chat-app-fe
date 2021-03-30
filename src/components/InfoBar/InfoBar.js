import React from "react";
import "./InfoBar.css";
import CloseIcon from "../../icons/CloseIcon.png";
import OnlineIcon from "../../icons/OnlineIcon.png";

const InfoBar = ({ room }) => {
  return (
    <div className="infobar">
      <div className="left-inner-container">
        <img className="online-icon" src={OnlineIcon} alt="online image" />
        <h3>{room}</h3>
      </div>
      <div className="right-inner-container">
        <a href="/">
          <img src={CloseIcon} alt="close image" />
        </a>
      </div>
    </div>
  );
};

export default InfoBar;
