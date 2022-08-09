import React, { useEffect, useState } from "react";
import RecipeDetail from "../component/recipeDetail";
import { useParams } from "react-router-dom";

export const Detail = () => {
  const params = useParams();
  const [detalle, setDetalle] = useState();
  useEffect(() => {
    const url = `${process.env.BACKEND_URL}/api/recipes/${params.id}`;
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        setDetalle(response);
        console.log(response);
      });
  }, []);

  return (
    <div class="container d-flex align-items-center justify-content-center flex-wrap">
      {detalle ? (
        <RecipeDetail
          cookingtime={detalle.cookingtime}
          image={detalle.image}
          name={detalle.name}
          ingredients={detalle.ingredients}
          description={detalle.description}
          categories={detalle.categories.map((value, index) => {
            return (
              <img className="categories m-1" key={index} src={value.image} />
            );
          })}
        />
      ) : (
        ""
      )}
    </div>
  );
};
