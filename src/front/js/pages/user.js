import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../../styles/index.css";
import { UserRegistration } from "./userRegistration";
import { UserLogin } from "./userLogin";

export const User = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <UserRegistration />
        </div>
        <div className="col-6">
          <UserLogin />
        </div>
      </div>
    </div>
  );
};
