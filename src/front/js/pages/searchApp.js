import React from "react";
import { SearchBar } from "../component/searchBar";
import caruselbuscador from "../../img/caruselbuscador.png";
import caruselbuscador2 from "../../img/caruselbuscador2.png";
import caruselbuscador3 from "../../img/caruselbuscador3.png";

export const SearchApp = () => {
  return (
    <>
      <div
        id="carouselExampleSlidesOnly"
        className="carousel4 slide d-none d-sm-block"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner ">
          <div className="carousel-item active">
            <img src={caruselbuscador} class="d-block w-100" />
          </div>
          <div className="carousel-item">
            <img src={caruselbuscador2} className="d-block w-100" />
          </div>
          <div className="carousel-item">
            <img src={caruselbuscador3} class="d-block w-100" />
          </div>
        </div>
      </div>

      <div className="textsearch mt-4 mx-4 text-center">
        <h1>¿Qué ingredientes tienes a mano?</h1>
        <p>Te lo ponemos fácil: dinos qué ingredientes quieres utilizar.</p>
      </div>
      <SearchBar />
    </>
  );
};
