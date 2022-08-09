import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../../styles/index.css";
import { UserRegistration } from "./userRegistration";
import { UserLogin } from "./userLogin";

export const RegistrationValidated = () => {
  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-6">
          <h1>Everything went ok! please confirm email and log in</h1>
        </div>
      </div>
    </div>
  );
};
