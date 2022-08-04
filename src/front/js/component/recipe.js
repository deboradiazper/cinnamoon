import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import { Detail } from "../pages/detail";

const Recipe = (props) => {
  const { store, actions } = useContext(Context);
  return (
    <div className="card border-0">
      <div className="position-relative">
        <img src={props.image} className="img-recipe img-fluid" alt="..." />
        <div className="buttonImage position-absolute bottom-0 start-0 m-3">
          <Link
            to={`detail/${props.id}`}
            className="btn go text-light border-0"
          >
            GO
          </Link>
        </div>
      </div>
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <h5 className="card-title">{props.name}</h5>
          <span className="star">
            <i className="fas fa-star"></i>
          </span>
        </div>
        <p className="card-text">{props.categories}</p>
      </div>
    </div>
  );
};

Recipe.propTypes = {
  name: PropTypes.string,
  categories: PropTypes.string,
  image: PropTypes.string,
  id: PropTypes.number,
};

export default Recipe;
