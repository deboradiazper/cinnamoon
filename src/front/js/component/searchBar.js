import React, { useEffect, useState } from "react";
import Recipe from "./recipe";

export const SearchBar = () => {
  //lo q introduce el usuario
  const [search, setSearch] = useState("");
  // lo q tenemos en api
  const [recipe, setRecipe] = useState([]);

  //datos api
  const showDataRecipes = async () => {
    const opts = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        data: search,
      }),
    };
    const response = await fetch(
      process.env.BACKEND_URL + "/api/searchbar",
      opts
    );
    const dataRecipes = await response.json();
    console.log(dataRecipes);
    return dataRecipes;
  };

  //render vista
  useEffect(() => {}, []);

  const searcher = (e) => {
    setSearch(e.target.value);
  };

  const subtmitHandler = async (e) => {
    e.preventDefault();
    const searchResults = await showDataRecipes(search);
    setRecipe(searchResults);
  };

  return (
    <div className="search">
      <h1>busca ingredientes</h1>
      <div className="searchInput">
        <form onSubmit={subtmitHandler}>
          <input type="search" onChange={searcher} />
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
