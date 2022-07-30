import React, { useEffect, useState } from "react";
import RecipeDetail from "../component/recipeDetail";
import { useParams } from "react-router-dom";

export const Detail = () => {
  const params = useParams();

  return (
    <div className="container">
      <RecipeDetail />
    </div>
  );
};
