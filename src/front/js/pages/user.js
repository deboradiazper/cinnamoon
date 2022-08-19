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
        <div className="textocentral col-12 text-center pt-4">
          <h3>Bienvenid@</h3>
          <p>
            Estás a punto de acceder a tu zona de usuario. Por si no nos
            conoces, registrarte te permitirá añadir a favoritos aquellas
            recetas que más te han gustado. También podrás subir tus propias
            recetas y compartirlas con la comunidad. Todo de forma gratuita.
            Queremos que sea accesible para todo el mundo.
          </p>
        </div>
      </div>
      <div className="row">
        <UserRegistration />
        <UserLogin />
      </div>
    </div>
  );
};
