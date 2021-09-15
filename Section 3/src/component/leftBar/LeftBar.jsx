import React from "react";
import path8 from "../../path8.svg";
import home from "../../home.svg";
import account from "../../account.svg";
import alert from "../../alert.svg";
import setting from "../../setting.svg";
import "./leftBar.css";

const LeftBar = () => {
  return (
    <div className="left-bar">
      <div className="top">
        <img src={path8} className="path8" alt="logo" />
      </div>
      <div className="lower-bar">
        <img src={home} className="home" alt="logo" />
        <img src={account} className="account" alt="logo" />
        <img src={alert} className="alert" alt="logo" />
        <img src={setting} className="setting" alt="logo" />
      </div>
    </div>
  );
};
export default LeftBar;
