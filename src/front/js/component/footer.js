import React, { Component } from "react";
import { Link } from "react-router-dom";
import imgfooter from "../../img/imgfooter.png";
import imgfooter2 from "../../img/imgfooter2.png";

export const Footer = () => {
  return (
    <div className="container-fluid p-0 mt-5">
      <div className="row">
        <div
          className="diverse col-md-6 d-flex justify-content-center align-items-center"
          style={{ minHeight: "300px" }}
        >
          <h3 className="title-all2">RECETAS PARA TODOS</h3>
        </div>
        <div className="imgfooter col-md-6 p-0">
          <img
            src={imgfooter}
            className="imgfooter"
            alt="img-footer"
            width="100%"
            height="300"
          />
        </div>
      </div>
      <div className="row">
        <div className="imgfooter col-md-6 p-0">
          <img
            src={imgfooter2}
            className="imgfooter"
            alt="img-footer"
            width="100%"
            height="300"
          />
        </div>
        < div className="diverse2 col-md-6 d-flex justify-content-center align-items-center text-center"
          style={{ minHeight: "300px" }}
        >
          <h3 className="title-all2">
            ALIMENTACION BASADA EN INGREDIENTES VEGETALES</h3>
        </div>
      </div>
      <div className="diverse3" id="diverse3" width="100%" height="300">
        <div className="row">
          <div className="col-md-4 py-5 text-center">
            <h5 className="px-3">
              NUESTROS VALORES
            </h5>
            <p className="text3 px-2 py-3 px-2">
              En CINNAMOON somos partidarios de la inclusividad. Es por eso que
              contamos con recetas para todas aquellas personas que, por una
              cuestión personal o de salud, han renunciado a comer ciertos
              alimentos. Partimos de una base vegetariana y contamos con un amplio
              banco de recetas sin gluten, sin lactosa y sin azúcar. Nuestra
              intención es que haya muchas más.
            </p>
          </div>
          <div className="col-md-4 py-5 text-center">
            <h5 className="px-3">SOMOS LO QUE COMEMOS</h5>
            <p className="text3 px-2 py-3">
              Tan importante es alimentarse bien como hacerlo de forma consciente.
              Es por eso que nos gusta aportar información acerca de los
              ingredientes que utilizamos para las recetas. Como cocinar nos
              apasiona, también nos apasiona la historia de los ingredientes.
            </p>
          </div>
          <div className="col-md-4 py-5 text-center px-2">
            <h5 className="px-3">CRECER EN COMUNIDAD</h5>
            <p className="text3 px-2 py-3">
              No queremos ser únicamente una página web de recetas. Nuestro
              objetivo es crear una comunidad en la que cualquier persona afín a
              nuestros valores pueda aportar su granito de arena. Compartir es
              vivir.
            </p>
          </div>
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
          />
        </div>
      </footer>
    </div>
  );
};











