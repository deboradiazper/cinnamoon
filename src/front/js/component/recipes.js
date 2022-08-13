import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Recipe from "./recipe";

const Recipes = () => {
  const { store, actions } = useContext(Context);
  return (
    <div className="row">
      <h3 className="title-all mt-5">Veganas</h3>
      <div className="scroll-container d-flex">
        {store.recipes.map((recipe, index) => {
          return (
            <div className="col-12 col-md-4 mt-3" id="recipes" key={index}>
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

      <h3 className="title-all mt-5 px-2 py-2">Sin gluten</h3>
      <div className="scroll-container d-flex">
        {store.recipes.map((recipe, index) => {
          return (
            <div className="col-12 col-md-4 mt-3" id="recipes" key={index}>
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

      <h3 className="title-all mt-5">Sin Lactosa</h3>
      <div className="scroll-container d-flex">
        {store.recipes.map((recipe, index) => {
          return (
            <div className="col-12 col-md-4 mt-3" id="recipes" key={index}>
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

      <h3 className="title-all mt-5">Sin Azúcar</h3>
      <div className="scroll-container d-flex">
        {store.recipes.map((recipe, index) => {
          return (
            <div className="col-12 col-md-4 mt-3" id="recipes" key={index}>
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

export default Recipes;
