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
          width="100%"
          height="300"
        >
          <div class="cta">
            <span class="hover-underline-animation">
              <strong>Recetas por categoria</strong>
            </span>
            <path
              id="Path_10"
              data-name="Path 10"
              d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
              transform="translate(30)"
            ></path>
          </div>
        </div>
        <div className="imgfooter col-md-6 p-0">
          <img
            src={imgfooter}
            className="imgfooter"
            alt="img-footer"
            width="100%"
            height="300x"
          />
        </div>
        <div className="imgfooter col-md-6 p-0">
          <img
            src={imgfooter2}
            className="imgfooter"
            alt="img-footer"
            width="100%"
            height="300"
          />
        </div>
        <div
          className="diverse2 col-md-6 d-flex justify-content-center"
          width="100%"
          height="300"
        >
          <button className="cta">
            <span className="hover-underline-animation">
              <strong>Recetas elaboradas con ingredientes vegetales</strong>
            </span>
            <path
              id="Path_10"
              data-name="Path 10"
              d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
              transform="translate(30)"
            ></path>
          </button>
        </div>
      </div>
      <div className="diverse3" id="diverse3" width="100%" height="150">
        <div className="row">
          <div className="col-md-6 mt-3">
            <div
              className="text-center collapse multi-collapse p-4"
              id="multiCollapseExample2"
            >
              <div className="card card-body text3">
                Tan importante es alimentarse bien como hacerlo de forma
                consciente. Es por eso que nos gusta aportar información acerca
                de los ingredientes que utilizamos para las recetas. Como
                cocinar nos apasiona, también nos apasiona la historia de los
                ingredientes.
              </div>
            </div>
          </div>
          <div className="col-md-6 mt-3">
            <div
              className="text-center collapse multi-collapse p-4"
              id="multiCollapseExample1"
            >
              <div className="card card-body text3">
                En CINNAMOON somos partidarios de la inclusividad. Es por eso
                que contamos con recetas para todas aquellas personas que, por
                una cuestión personal o de salud, han renunciado a comer ciertos
                alimentos. Partimos de una base vegetariana y contamos con un
                amplio banco de recetas sin gluten, sin lactosa y sin azúcar.
                Nuestra intención es que haya muchas más.
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <h3
              className="text-center pt-5"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#multiCollapseExample2"
              aria-expanded="false"
              aria-controls="multiCollapseExample2"
            >
              NUESTROS VALORES
            </h3>
          </div>
          <div className="col-md-6">
            <h3
              className="text-center pt-5"
              type="button"
              data-bs-toggle="collapse"
              href="#multiCollapseExample1"
              role="button"
              aria-expanded="false"
              aria-controls="multiCollapseExample1"
            >
              SOMOS LO QUE COMEMOS
            </h3>
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
