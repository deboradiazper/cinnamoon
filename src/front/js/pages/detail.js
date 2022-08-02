import React, { useEffect, useState } from "react";
import RecipeDetail from "../component/recipeDetail";
import { useParams } from "react-router-dom";

export const Detail = () => {
  const params = useParams();

  return (
    <div className="container">
      <RecipeDetail
        name="strawberry milkshake"
        image="https://images.unsplash.com/photo-1592452319703-9a68b88dd26b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c21vdGhpZXxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60"
      />
    </div>
  );
};
