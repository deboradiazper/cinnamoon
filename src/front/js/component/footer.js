import React, { Component } from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div data-aos="fade-down" className="container-fluid p-0">
      <div className="container-fluid diverse3">
        <div className="row pt-2" id="diverse3" width="100%" height="350">
          <div className="textAboutus col-md-4 my-4 text-center p-3">
            <h5 className="px-2 mt-2">NUESTROS VALORES</h5>
            <p className="text-3 text-center">
              En CINNAMOON somos partidarios de la inclusividad. Es por eso que
              contamos con recetas para todas aquellas personas que, por una
              cuestión personal o de salud, han renunciado a comer ciertos
              alimentos. Partimos siempre de una base vegetal.
            </p>
          </div>
          <div className="textAboutus col-md-4 my-4 text-center p-3">
            <h5 className="px-2 mt-2">SOMOS LO QUE COMEMOS</h5>
            <p className="px-2 py-2">
              Tan importante es alimentarse bien como hacerlo de forma
              consciente. Es por eso que nos gusta aportar información acerca de
              los ingredientes que utilizamos para las recetas. Como cocinar nos
              apasiona, también nos apasiona la historia de los ingredientes.
            </p>
          </div>
          <div className="textAboutus col-md-4 my-4 text-center p-3">
            <h5 className="px-2 mt-2">CRECER EN COMUNIDAD</h5>
            <p className="px-2 py-2">
              No queremos ser únicamente una página web de recetas. Nuestro
              objetivo es crear una comunidad en la que cualquier persona afín a
              nuestros valores pueda aportar su granito de arena. Compartir es
              vivir.
            </p>
          </div>
        </div>
      </div>
      <footer className="footer mt-auto py-3 pt-1">
        <div className="row">
          <div className="col-md-4">
            {" "}
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
              />
            </div>
          </div>
          <div className="col-md-4">
            {/* <p>
              <strong>Síguenos en las redes sociales</strong>
            </p> */}
          </div>
          <div className="col-md-4"></div>
        </div>
      </footer>
    </div>
  );
};
