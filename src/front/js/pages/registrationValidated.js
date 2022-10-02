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
      <div className="row justify-content-center">
        <div className="col-md-6 text-center">
          <h2>Por favor, inicia sesión para validar tu usuario</h2>
          <UserLogin />
        </div>
      </div>
    </div>
  );
};
