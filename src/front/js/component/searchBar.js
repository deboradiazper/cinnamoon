import React, { useState } from "react";

export const SearchBar = () => {
  //lo q introduce el usuario
  const [searchInputValue, setSearchInputValue] = useState("");
  // lo q tenemos en api
  const [recipe, setRecipe] = useState([]);

  const searchOnApi = (recipe) => {
    fetch(process.env.BACKEND_URL + "/api/searchbar", {
      method: "POST",
      body: JSON.stringify(recipe),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(searchOnApi);
    // fetch(process.env.BACKEND_URL + "/api/searchbar")
    //   .then((response) => response.json())
    //   .then((data) => setIngredient(data));
  };

  const sumbitHandler = (e) => {
    e.preventDefault();
    return setRecipe;
  };

  return (
    <div className="search">
      <h1>busca ingredientes</h1>
      <div className="searchInput">
        <form onSubmit={sumbitHandler}>
          <input
            type="search"
            onChange={(e) => {
              setSearchInputValue(e.target.value);
            }}
          />
        </form>

        {/* {ingredient.map((ingredient) => {
          return (
            <div className="recipes">
              <h1>{ingredient.name}</h1>
            </div>
          );
        })} */}
      </div>
    </div>
  );
};
