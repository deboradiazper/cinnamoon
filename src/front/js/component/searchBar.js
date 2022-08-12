import React, { useEffect, useState } from "react";

export const SearchBar = () => {
  //lo q introduce el usuario
  const [search, setSearch] = useState("");
  // lo q tenemos en api
  const [recipe, setRecipe] = useState([]);

  //datos api
  const showDataRecipes = async () => {
    const response = await fetch(process.env.BACKEND_URL + "/api/recipes");
    const dataRecipes = await response.json();
    console.log(dataRecipes);
  };
  showDataRecipes();
  console.log("testeando");

  //render vista
  useEffect(() => {
    showDataRecipes();
  }, []);

  const searcher = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };

  const subtmitHandler = async (e) => {
    e.preventdefault();
    const searchResults = await showDataRecipes(search);
    console.log(searchResults);
  };

  return (
    <div className="search">
      <h1>busca ingredientes</h1>
      <div className="searchInput">
        <form onSubmit={subtmitHandler}>
          <input
            type="search"
            onChange={(e) => {
              searcher;
            }}
          />
        </form>

        {recipe.map((recipe) => {
          return (
            <div className="recipes">
              <h1>{recipe.name}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};
