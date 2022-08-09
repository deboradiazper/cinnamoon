import React, { useEffect } from "react";
import Recipes from "../component/recipes";
import { useParams } from "react-router-dom";

export const RecipeAll = () => {
  return (
    <div className="container">
      <Recipes />
    </div>
  );
};

export default RecipeAll;
