import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import { Detail } from "../pages/detail";

const Recipe = (props) => {
  const { store, actions } = useContext(Context);
  const [Click, setClick] = useState(false);
  console.log(store.userInfo);
  const handleClick = () => {
    //actions.addFavorites({user_id:props.id});
    Click == true ? setClick(false) : setClick(true);
  };

  return (
    <div className="card border-0">
      <div className="position-relative">
        <img src={props.image} className="img-recipe img-fluid" alt="receta" />
        <div className="buttonImage position-absolute bottom-0 start-0 m-3">
          <Link
            to={`/detail/${props.id}`}
            className="btn go text-light border-0"
          >
            GO
          </Link>
        </div>
      </div>
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <h5 className="card-title">{props.name}</h5>
          <button
            onClick={handleClick}
            className={
              Click === true
                ? "love btn border-0 text-danger"
                : "love2 btn border-0 text-muted"
            }
          >
            <i className="heart fas fa-heart"></i>
          </button>
        </div>
        <div className="card-text">
          {props.categories.map((value, index) => {
            return (
              <div className="categorie d-inline-flex m-1" key={index}>
                {value}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

Recipe.propTypes = {
  name: PropTypes.string,
  categories: PropTypes.array,
  image: PropTypes.string,
  id: PropTypes.number,
  categories: PropTypes.array,
};

export default Recipe;
