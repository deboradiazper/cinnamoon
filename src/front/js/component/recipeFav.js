import React from "react";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";

const RecipeFav = (props) => {
  return (
    <div className="card border-0">
      <div className="position-relative">
        <img
          src={props.image}
          className="img-fav card-img-top img-fluid"
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
          <h6 className="card-title">Cheese cake sugar free{props.title}</h6>
          <span className="star">
            <i className="fas fa-star"></i>
          </span>
        </div>
        <p className="card-text2">vegan, lactose free{props.type}</p>
      </div>
    </div>
  );
};

RecipeFav.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  image: PropTypes.string,
};

export default RecipeFav;
