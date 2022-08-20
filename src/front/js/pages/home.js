import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import RecipeList from "../component/recipeList.js";
import RecipeFavList from "../component/recipeFavList.js";
import { Link, useNavigate } from "react-router-dom";
import glutenfree from "../../img/glutenfree.png";
import lactosefree from "../../img/lactosefree.png";
import sugarfree from "../../img/sugarfree.png";
import vegana from "../../img/vegana.png";
import imgfooter from "../../img/imgfooter.png";
import imgfooter2 from "../../img/imgfooter2.png";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate("");
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    actions.setSearch(search);
    navigate("/searchApp");
  };
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div
            id="carouselExampleDark"
            className="carousel carousel-dark slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="3"
                aria-label="Slide 4"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="10000">
                <img src={glutenfree} class="d-block w-100" alt="..." />

                <div className="carousel-caption d-none d-md-block">
                  <h2 className="title-all px-5">SIN GLUTEN</h2>
                  <p>
                    Crea tus platos preferidos con otroa ingredientes,
                    consiguiendo resultados increibles.
                  </p>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <img src={vegana} class="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h2 className="title-all px-5">VEGANAS</h2>
                  <p>Cocina con vegetales y crea sabores exquisitos.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src={lactosefree} class="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h2 className="title-all px-5">SIN LACTOSA</h2>
                  <p>
                    Descubre otras alternativas a la leche y conoce que
                    alimentos que son fuente de calcio.
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <img src={sugarfree} class="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h2 className="title-all px-5">SIN AZUCAR</h2>
                  <p>
                    Descubre como sustituir azúcar por otros productos naturales
                    y cocina postres y dulces saludables.
                  </p>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <div className=" col-12 my-5 d-flex justify-content-center">
          {store.categories.map((category) => {
            return (
              <Link
                to={`/recipeAll/${category.name}`}
                className="ctaCategory pe-5"
              >
                <span className="hover-underline-animation">
                  {category.name}{" "}
                </span>
                <path
                  id="Path_10"
                  data-name="Path 10"
                  d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                  transform="translate(40)"
                ></path>
              </Link>
            );
          })}
        </div>
        <div className="row justify-content-center text-center">
          <div className="col-10 text-center mb-3">
            <form onSubmit={handleSubmit}>
              <div className="input-group pb-2 pt-5 mt-5">
                <input
                  onChange={handleChange}
                  type="text"
                  className="form-control"
                  placeholder="¿Qué ingredientes tienes a mano?"
                />
              </div>
              <div className="col-12 d-flex justify-content-center">
                <button className="botonreceta">
                  <p>Buscar recetas</p>
                  <svg
                    stroke-width="4"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    fill="none"
                    class="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                      stroke-linejoin="round"
                      stroke-linecap="round"
                    ></path>
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="recipes d-flex justify-content-between mb-4">
          <h3 className="title-all">NUEVAS RECETAS</h3>
        </div>
        <RecipeList />
        <div className="recipes d-flex justify-content-between mb-4">
          <h3 className="title-all">RECETAS POPULARES</h3>
        </div>
        <RecipeFavList />
      </div>

      <div className="row">
        <div
          className="diverse col-md-6 d-flex flex-column"
          style={{ minHeight: "300px" }}
        >
          <h3 className="title-all2 pt-5 px-3 text-center">
            RECETAS PARA TODOS
          </h3>
          <ul className="py-2 px-3">
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
        <div className="imgfooter col-md-6 p-0">
          <img
            src={imgfooter}
            className="imgfooter"
            alt="img-footer"
            width="100%"
            height="100%"
          />
        </div>
      </div>
      <div className="row">
        <div className="imgfooter col-md-6 p-0">
          <img src={imgfooter2} alt="img-footer" width="100%" height="300" />
        </div>
        <div
          className="diverse2 col-md-6 d-flex flex-column text-center"
          style={{ minHeight: "300px" }}
        >
          <h3 className="title-all2 pt-5 px-3">
            ALIMENTACION BASADA EN INGREDIENTES VEGETALES
          </h3>
          <p className="py-2 px-3">
            <b>Okinawa</b>,es una isla en el sur de Japón que se ha hecho
            conocer por tener la esperanza de vida más elevada del mundo. Su
            alimentación fundamentada en <b>productos de origen vegetal</b> y
            pobre en acidos grasos parece ser la clave de su <b>longevidad</b>.
          </p>
        </div>
      </div>
      <div className="diverse3" id="diverse3" width="100%" height="300">
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
    </div>
  );
};
