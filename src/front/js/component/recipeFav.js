import React from "react";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";

const RecipeFav = (props) => {
  return (
    <div className="recipeFav col-md-2">
      <div className="card m-2">
        <div class="position-relative">
          <img
            src="https://i0.wp.com/avenayaguacate.com/wp-content/uploads/2020/07/IMG_4243.jpg?resize=750%2C938&ssl=1"
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
          <p className="card-text">vegan, lactose free{props.type}</p>
        </div>
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
