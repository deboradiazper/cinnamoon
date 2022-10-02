import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Contact } from "./contact";

export const Footer = () => {
  return (
    <footer className="footer mt-auto suscribirse">
      <div className="row mx-2">
        <div className=" col-md-6 justify-content-center align-items-center my-4">
          <p>
            Suscríbete a nuestra mailing list y recibe las últimas novedades:
            nuevas recetas, historia de los alimentos, estilo de vida
            saludable...
          </p>
          <button className="suscribe">
            <span className="hover-underline-animation"> Mailing list</span>
            <svg
              viewBox="0 0 46 16"
              height="10"
              width="30"
              xmlns="http://www.w3.org/2000/svg"
              id="arrow-horizontal"
            >
              <path
                transform="translate(30)"
                d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                data-name="Path 10"
                id="Path_10"
              ></path>
            </svg>
          </button>
          <p className="redessociales"> Síguenos en las redes sociales:</p>
          <span>Instagram</span>
          <span>Twitter</span>
          <span>Pinterest</span>
        </div>
        <div className=" col-md-6 text-center justify-content-center align-items-center my-5">
          <Contact />
        </div>
      </div>
    </footer>
  );
};
