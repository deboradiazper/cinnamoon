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
            class="carousel carousel-dark slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-indicators">
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
            <div class="carousel-inner">
              <div class="carousel-item active" data-bs-interval="10000">
                <img src={glutenfree} class="d-block w-100" alt="..." />

                <div class="carousel-caption d-none d-md-block">
                  <h3 className="titel-all">SIN GLUTEN</h3>
                  <p>
                    Crea tus platos preferidos con otroa ingredientes,
                    consiguiendo resultados increibles
                  </p>
                </div>
              </div>
              <div class="carousel-item" data-bs-interval="2000">
                <img src={vegana} class="d-block w-100" alt="..." />
                <div class="carousel-caption d-none d-md-block">
                  <h3 className="titel-all">VEGANAS</h3>
                  <p>Cocina con vegetales y crea sabores exquisitos</p>
                </div>
              </div>
              <div class="carousel-item">
                <img src={lactosefree} class="d-block w-100" alt="..." />
                <div class="carousel-caption d-none d-md-block">
                  <h3 className="titel-all">SIN LACTOSA</h3>
                  <p>
                    Descubre otras alternativas a la leche y descubre otros
                    alimentos que son fuente de calcio
                  </p>
                </div>
              </div>
              <div class="carousel-item">
                <img src={sugarfree} class="d-block w-100" alt="..." />
                <div class="carousel-caption d-none d-md-block">
                  <h3 className="titel-all">SIN AZUCAR</h3>
                  <p>
                    Descubre como sustituir azúcar por otros productos naturales
                    y cocina postres y dulces saludables.
                  </p>
                </div>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <div className=" col-12 pt-3 d-flex justify-content-center">
          {store.categories.map((category) => {
            return (
              <Link to={`/recipeAll/${category.name}`} className="cta pe-5">
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
        <div className="col-12">
          <form onSubmit={handleSubmit}>
            <div className="input-group pb-5 pt-5">
              <input
                onChange={handleChange}
                type="text"
                className="form-control"
                aria-label="Con que ingredientes quieres cocinar?"
              />
              {/* <label className="search input-group-text border-0">
                <i className="fas fa-search text-muted"></i>
              </label> */}
              <button>Buscar</button>
            </div>
          </form>
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
    </div>
  );
};
