import React, { useEffect, useState } from "react";
import RecipeDetail from "../component/recipeDetail";
import { useParams } from "react-router-dom";

export const Detail = () => {
  const params = useParams();

  return (
    <div className="container">
      <RecipeDetail
        name="Bizcocho chocolate"
        image="https://images.unsplash.com/photo-1613563952058-93bc5bff5591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHJlY2V0YSUyMG51ZWNlc3xlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60"
      />
    </div>
  );
};
