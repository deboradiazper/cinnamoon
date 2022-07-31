import React, { useContext } from "react";
import Recipe from "./recipe";

const RecipeList = () => {
  return (
    <div className="scroll-container d-flex">
      <div className="col-12 col-md-4 px-2">
        <Recipe
          image={
            "https://images.unsplash.com/photo-1497052254059-f3e0bf1a5133?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y2FrZSUyMG1hdGNoYXxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60"
          }
        />
      </div>
      <div className="col-12 col-md-4 px-2">
        <Recipe
          image={
            "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHJlY2V0YSUyMGFndWFjYXRlfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          }
        />
      </div>
      <div className="col-12 col-md-4 px-2">
        <Recipe
          image={
            "https://images.unsplash.com/photo-1592452319703-9a68b88dd26b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c21vdGhpZXxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60"
          }
        />
      </div>
      <div className="col-12 col-md-4 px-2">
        <Recipe
          image={
            "https://choosingchia.com/jessh-jessh/uploads/2016/04/matcha-mint-chocolate-chia-pudding-3.jpg"
          }
        />
      </div>
      <div className="col-12 col-md-4 px-2">
        <Recipe
          image={
            "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y29taWRhfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          }
        />
      </div>
    </div>
  );
};

export default RecipeList;
