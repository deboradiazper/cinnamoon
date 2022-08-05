import React, { useEffect, useState } from "react";
import RecipeDetail from "../component/recipeDetail";
import { useParams } from "react-router-dom";

export const Detail = () => {
  const params = useParams();
  const [detalle, setDetalle] = useState();
  useEffect(() => {
    fetch(process.env.BACKENND_URL + `api/recipes/${params.detailid}`)
      .then((response) => response.json())
      .then((response) => setDetalle(response));
  }, []);

  return (
    <div className="container">
      {detalle ? (
        <RecipeDetail
          image={detalle.image}
          name={detalle.name}
          categories={props.categories.map((value, index) => {
            return <p key={index}>{value.name}</p>;
          })}
        />
      ) : (
        ""
      )}
    </div>
  );
};
