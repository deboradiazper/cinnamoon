import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Recipe from "./recipe";

const Recipes = () => {
  const { store, actions } = useContext(Context);
  return (
    <div className="row">
      {store.recipes.map((recipe, index) => {
        return (
          <div className="col-12 col-md-4" id="recipes" key={index}>
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
  );
};

export default Recipes;
