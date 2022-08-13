import React, { Component } from "react";
import { Link } from "react-router-dom";
export const Footer = () => (
  <div className="container-fluid p-0">
    <div className="diverse">
      <div className="row d-flex">
        <h5 className="text-center mb-3">¿QUE PODEMOS HACER POR TI?</h5>
        <div className="col-12 col-md-4 text-center px-5">
          <img
            className="register"
            src="https://cdn-icons-png.flaticon.com/512/3456/3456400.png"
          ></img>
          <h5>REGISTRATE</h5>
          <p className="text3">
            En menos de dos clicks podrás tener acceso a todas los servicios de
            nuestra app.
          </p>
        </div>
        <div className="col-12 col-md-4 text-center px-5">
          <img
            className="ingredients"
            src="https://cdn-icons-png.flaticon.com/128/2329/2329888.png"
          ></img>
          <h5>RECETAS SENCILLAS Y SALUDABLES</h5>
          <p className="text3">Puedes bucar por ingrediente o por categoria.</p>
        </div>
        <div className="col-12 col-md-4 text-center px-5">
          <img
            className="cookbook"
            src="https://cdn-icons-png.flaticon.com/512/4388/4388461.png"
          ></img>
          <h5>CREA TU PROPIO LIBRO DE RECETAS</h5>
          <p className="text3">Guarda y planifica tus recetas favoritas.</p>
        </div>
      </div>
      <div className="button-subscribe d-flex justify-content-center mt-4 mb-3">
        <Link
          to={"userArea"}
          className="btn btn-large subscribe text-light border-0 px-3"
        >
          REGISTRATE
        </Link>
      </div>
    </div>
    <footer className="footer mt-auto py-3 text-center pt-4">
      <p>Siguenos en:</p>
      <div className="iconsFooter">
        <img
          className="instagram mx-4 img-fluid"
          src="https://cdn-icons-png.flaticon.com/128/1077/1077042.png"
        ></img>
        <img
          className="tweet img-fluid"
          src="https://cdn-icons-png.flaticon.com/128/250/250558.png"
        ></img>
        <img
          className="pinterest mx-4 img-fluid"
          src="https://cdn-icons-png.flaticon.com/128/104/104628.png"
        ></img>
      </div>
    </footer>
  </div>
);
