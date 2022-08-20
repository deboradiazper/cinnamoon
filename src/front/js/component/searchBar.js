import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import Recipe from "./recipe";

export const SearchBar = () => {
  //lo q introduce el usuario
  const [search, setSearch] = useState("");
  // lo q tenemos en api
  const [recipe, setRecipe] = useState([]);
  //store
  const { actions, store } = useContext(Context);

  //render vista
  useEffect(() => {
    setSearch(store.searchRecipes);
    actions.search(search).then((result) => {
      setRecipe(result);
      actions.cleanSearch();
    });
  }, []);

  const searcher = (e) => {
    setSearch(e.target.value);
  };

  const subtmitHandler = async (e) => {
    e.preventDefault();
    const searchResults = await actions.search(search);
    setRecipe(searchResults);
  };

  return (
    <>
      <div className="row justify-content-center text-center">
        <div className="col-10 search text-center mb-3">

          <form onSubmit={subtmitHandler}>
            <div className="input-group pb-2 pt-5 mt-5">
              <input
                className="form-control"
                id="searchinput"
                type="text"
                placeholder="¿Qué ingredientes tienes a mano?"
                defaultValue={search}
                onChange={searcher}
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
      <div className="row">
        {recipe.map((recipe, index) => {
          return (
            <div className="recipes col-12 col-md-4" key={index}>
              <Recipe
                name={recipe.name}
                id={recipe.id}
                image={recipe.image}
                categories={recipe.categories.map((value, index) => {
                  return (
                    <img
                      className="categories"
                      key={index}
                      src={value.image}
                    />

                  );
                })}
              />
            </div>

          );
        })}
      </div>
    </>
  );
};
