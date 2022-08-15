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
    <div className="container">
      <div className="searchInput justify-content-center">
        <form onSubmit={subtmitHandler}>
          <input
            type="search"
            placeholder="¿Qué ingredientes tienes a mano?"
            defaultValue={search}
            onChange={searcher}
          />
          <button>Buscar</button>
        </form>

        {recipe.map((recipe) => {
          return (
            <div className="recipes">
              <Recipe
                name={recipe.name}
                id={recipe.id}
                image={recipe.image}
                categories={recipe.categories.map((value, index) => {
                  return (
                    <img className="categories" key={index} src={value.image} />
                  );
                })}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
