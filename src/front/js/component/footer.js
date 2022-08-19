import React, { Component } from "react";
import { Link } from "react-router-dom";
import footerimg from "../../img/footerimg.png";
import footerimg2 from "../../img/footerimg2.png";

export const Footer = () => {
  return (
    <div className="container-fluid p-0 mt-5">
      <div className="row">
        <div
          className="diverse col-md-6 d-flex align-items-start text-center pt-2"
          style={{ minHeight: "350px" }}
        >
          <div className="textFooter">
            <h4 className="title-all2 pt-4 px-3 text-center">
              RECETAS PARA TODOS
            </h4>
            <ul className="py-2 px-2">
              <li>
                El <b>calcio que mejor se absorbes</b> no es el de los lácteo,
                sino el de las algas.
              </li>
              <li>
                <b>Eliminar el gluten</b>de tu dieta mejora tu salud intestinal.
              </li>
              <li>
                Es posible <b>endulzar tus platos</b> con alimentos que tienen
                azúcar en su composición
              </li>
              <li>
                Una alimentación <b>vegana</b> puede ser rica en proteínas de
                origen vegetal.
              </li>
            </ul>
          </div>
        </div>
        <div
          className="imgfooter1 col-md-6 p-0 position-relative"
          style={{ minHeight: "350px" }}
        >
          <div className="position-absolute top-0 start-50 translate-middle-x mt-5">
            <img
              src={footerimg}
              className="img-footer"
              alt="img-footer"
              width="300 vw"
              height="auto"
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div
          className="imgfooter2 col-md-6 p-0 position-relative"
          style={{ minHeight: "350px" }}
        >
          <div className="position-absolute bottom-0 start-50 translate-middle-x mb-5">
            <img
              src={footerimg2}
              className="img-footer"
              alt="img-footer"
              width="300 vw"
              height="auto"
            />
          </div>
        </div>
        <div
          className="diverse2 col-md-6 d-flex align-items-end text-center pb-2"
          style={{ minHeight: "350px" }}
        >
          <div className="textFooter">
            <h4 className="title-all2 pt-4 px-3">
              ALIMENTACION BASADA EN INGREDIENTES VEGETALES
            </h4>
            <p className="py-2 px-2">
              <b>Okinawa</b>,es una isla en el sur de Japón que se ha dado a
              conocer por tener la esperanza de vida más elevada del mundo. Su
              alimentación fundamentada en <b>productos de origen vegetal</b> y
              pobre en acidos grasos parece ser la clave de su ç
              <b>longevidad</b>.
            </p>
          </div>
        </div>
      </div>
      <div className="diverse3" id="diverse3" width="100%" height="350">
        <div className="row">
          <div className="col-md-4 py-5 text-center">
            <h5 className="px-3">NUESTROS VALORES</h5>
            <p className="text3 px-2 py-3 px-2 text-center">
              En CINNAMOON somos partidarios de la inclusividad. Es por eso que
              contamos con recetas para todas aquellas personas que, por una
              cuestión personal o de salud, han renunciado a comer ciertos
              alimentos. Partimos de una base vegetariana y contamos con un
              amplio banco de recetas sin gluten, sin lactosa y sin azúcar.
              Nuestra intención es que haya muchas más.
            </p>
          </div>
          <div className="col-md-4 py-5 text-center">
            <h5 className="px-3">SOMOS LO QUE COMEMOS</h5>
            <p className="text3 px-2 py-3">
              Tan importante es alimentarse bien como hacerlo de forma
              consciente. Es por eso que nos gusta aportar información acerca de
              los ingredientes que utilizamos para las recetas. Como cocinar nos
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
        <p>Síguenos en:</p>
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
