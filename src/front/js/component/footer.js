import React, { Component } from "react";
import { Link } from "react-router-dom";
export const Footer = () => (
  <div className="container-fluid p-0">
    <div className="diverse">
      <div className="row d-flex">
        <h2 className="text-center mb-3">Acerca de CINNAMOON</h2>
        <div className="col-12 col-md-4 text-center px-5">
          <img
            className="register"
            src="https://cdn-icons-png.flaticon.com/512/3456/3456400.png"
          ></img>
          <h3>Nuestros valores</h3>
          <p className="text3">
            En CINNAMOON somos partidarios de la inclusividad. Es por eso que
            contamos con recetas para todas aquellas personas que, por una
            cuestión personal o de salud, han renunciado a comer ciertos
            alimentos. Contamos con un amplio banco de recetas sin gluten, sin
            lactosa y sin azúcar. Nuestra intención es que haya muchas más.
          </p>
        </div>
        <div className="col-12 col-md-4 text-center px-5">
          <img
            className="ingredients"
            src="https://cdn-icons-png.flaticon.com/128/2329/2329888.png"
          ></img>
          <h3>Somos lo que comemos</h3>
          <p className="text3">
            Tan importante es alimentarse bien como hacerlo de forma consciente.
            Es por eso que nos gusta aportar información acerca de los
            ingredientes que utilizamos para las recetas. Como cocinar nos
            apasiona, también nos apasiona la historia de los ingredientes.
          </p>
        </div>
        <div className="col-12 col-md-4 text-center px-5">
          <img
            className="cookbook"
            src="https://cdn-icons-png.flaticon.com/512/4388/4388461.png"
          ></img>
          <h3>Crecer en comunidad</h3>
          <p className="text3">
            No queremos ser únicamente una página web de recetas. Nuestro
            objetivo es crear una comunidad en la que cualquier persona afín a
            nuestros valores pueda aportar su granito de arena. Compartir es
            vivir.
          </p>
        </div>
      </div>
      <div className="button-subscribe d-flex justify-content-center mt-4 mb-3">
        {/* <Link
          to={"userArea"}
          className="btn btn-large subscribe text-light border-0 px-3"
        >
          Regístrate
        </Link> */}
      </div>
    </div>
    <footer className="footer mt-auto py-3 text-center pt-4">
      <p>Encuéntranos en las redes sociales:</p>
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
