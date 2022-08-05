import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Recipe from "./recipe";

const RecipeList = () => {
  const { store, actions } = useContext(Context);
  return (
    <div className="scroll-container d-flex">
      {store.recipes.map((recipe, index) => {
        return (
          <div className="col-12 col-md-4" key={index}>
            <Recipe
              name={recipe.name}
              categories={recipe.categories}
              id={recipe.id}
              image={recipe.image}
            />
          </div>
        );
      })}
    </div>
  );
};

export default RecipeList;
