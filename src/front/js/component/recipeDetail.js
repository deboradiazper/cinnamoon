import React from "react";
import PropTypes from "prop-types";
import Trivias from "./trivias";

const RecipeDetail = (props) => {
  return (
    <div className="row">
      <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
        <div className="card-detail">
          <div className="front">
            <img
              src={props.image}
              className="image-detail img-fluid mx-auto d-block"
              alt="..."
            />
          </div>
          <div className="back">
            <h3 className="text-light m-5 pt-2"></h3>
            <img
              src={props.image}
              className="image-detail img-fluid mx-auto d-block"
              alt="..."
            />
            <p></p>
            <p className="text-back m-5 pt-3">
              {props.ingredients.map((value, index) => {
                return <label key={index}>{value.name}</label>;
              })}
            </p>
          </div>
        </div>
      </div>

      <div className="description-detail col-12 col-md-6 p-2">
        <h2 className="title-detail">{props.name}</h2>
        <div className="star mt-3">
          <i className="fas fa-star"></i>
          <i className="fas fa-star ms-3"></i>
          <i className="fas fa-star ms-3"></i>
          <i className="fas fa-star ms-3"></i>
          <i className="fas fa-star ms-3"></i>
        </div>

        <div className="icons-description d-flex my-3">
          <div>
            {props.categories.map((value, index) => {
              return <p key={index}>{value}</p>;
            })}
          </div>
        </div>
        <p className="card-text3">{props.description}</p>
      </div>
      <div className="col-12 col-md-4">
        {props.ingredients.map((value, index) => {
          return (
            <Trivias
              trivias={value.trivia}
              ingredientName={value.name}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

RecipeDetail.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  categories: PropTypes.array,
  ingredientes: PropTypes.array,
};
export default RecipeDetail;
