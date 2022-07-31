import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import RecipeList from "../component/recipeList.js";
import RecipeFavList from "../component/recipeFavList.js";

export const Home = () => (
  <div className="container">
    <div className="row">
      <div className="col-12">
        <h2 className="title2 m-0 pt-4 pb-3">Hello,</h2>
        <p className="text1 ">What do you want to eat today?</p>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control border-0"
            placeholder="What ingredient do you have?"
            aria-label="WWhat ingredient do you have?"
            aria-describedby="basic-addon2"
          />
          <span className="search input-group-text border-0 ms-0">
            <i className="fas fa-search text-muted"></i>
          </span>
        </div>
        <div className="recipes d-flex justify-content-between my-5">
          <h4>The new recipes</h4>
          <button className="number border-0 text-light">
            24<i className="fas fa-arrow-right ps-2 text-light"></i>
          </button>
        </div>
      </div>
      <RecipeList />
      <div className="recipes d-flex justify-content-between my-5">
        <h4>The most popular</h4>
        <button className="number border-0 text-light">
          17<i className="fas fa-arrow-right ps-2 text-light"></i>
        </button>
      </div>
      <RecipeFavList />
    </div>
  </div>
);
