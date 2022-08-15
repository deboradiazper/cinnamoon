import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import RecipeList from "../component/recipeList.js";
import RecipeFavList from "../component/recipeFavList.js";
import { Link, useNavigate } from "react-router-dom";

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
          <h3 className="title2  mb-5">Hola, {store.user}</h3>
          {/* <p className="text1 mb-4">¿Qué te apetece comer hoy?</p> */}
          <div className="input-group mb-5">
            <form onSubmit={handleSubmit}>
              <label className="search input-group-text border-0 ms-0">
                <i className="fas fa-search text-muted"></i> &nbsp; ¿Qué
                ingredientes tienes a mano?
              </label>
              <input onChange={handleChange} type="text" />
              <button>Buscar</button>
            </form>
          </div>
          <div className="recipes d-flex justify-content-between mb-4">
            <h4>Nuevas recetas</h4>
            <Link
              to={"recipeAll"}
              className="btn btn-large all text-light border-0"
            >
              VER TODAS
              {/* <button className="number border-0 text-light ">
            24<i className="fas fa-arrow-right ps-2 text-light"></i>
          </button> */}
            </Link>
          </div>
        </div>
        <RecipeList />
        <div className="recipes d-flex justify-content-between mb-4">
          <h4>Recetas populares</h4>
          <button className="all border-0 text-light d-flex align-items-center justify-content-center">
            17<i className="fas fa-arrow-right ps-2 text-light"></i>
          </button>
        </div>
        <RecipeFavList />
      </div>
    </div>
  );
};
