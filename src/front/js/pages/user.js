import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../../styles/index.css";
import { UserRegistration } from "./userRegistration";
import { UserLogin } from "./userLogin";

export const User = () => {
  const style = {
    backgroundImage: 'url("/fotolado.jpg")',
  };

  return (
    <div>
      <div className="containerfondo">
        <div className="col-12" style={style}></div>
      </div>
      <div className="container">
        <div className="row">
          <UserLogin />
          <UserRegistration />
        </div>
      </div>
    </div>
  );
};
