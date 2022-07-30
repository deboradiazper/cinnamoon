import React from "react";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";

const Recipe = (props) => {
  return (
    <div className="recipeNew col-12 col-md-3">
      <div className="card m-2">
        <div className="position-relative">
          <img
            src="https://nutririana.com/wp-content/uploads/2020/06/Poke-bowl-vegano-de-no-at%C3%BAn.jpg"
            className="card-img-top img-fluid"
            alt="..."
          />
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
