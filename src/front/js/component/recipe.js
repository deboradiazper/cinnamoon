import React from "react";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";

const Recipe = (props) => {
  return (
    <div className="card h-100">
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
          <h5 className="card-title">Pokebowl vegan{props.title}</h5>
          <span className="star">
            <i className="fas fa-star"></i>
          </span>
        </div>
        <p className="card-text fs-6">vegan, lactose free{props.type}</p>
      </div>
    </div>
  );
};

Recipe.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  image: PropTypes.string,
  id: PropTypes.number,
};

export default Recipe;
