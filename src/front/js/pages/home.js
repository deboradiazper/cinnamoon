import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Recipe from "../component/recipe.js";
import RecipeFav from "../component/recipeFav.js";

export const Home = () => (
  <div className="container">
    <div className="row">
      <div className="col-12">
        <h3>Hello,</h3>
        <p>What do you want to eat today?</p>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control border-0"
            placeholder="What do you want to eat today?"
            aria-label="What do you want to eat today?"
            aria-describedby="basic-addon2"
          />
          <span className="search input-group-text border-0 ms-0">
            <i className="fas fa-search text-muted"></i>
          </span>
        </div>
        <div className="recipes d-flex justify-content-around">
          <h5>The new recipes</h5>
          <button className="number border-0 text-light">
            24<i className="fas fa-arrow-right ps-2 text-light"></i>
          </button>
        </div>
      </div>
      <div className="scroll-container d-flex">
        <Recipe />
        <Recipe />
        <Recipe />
        <Recipe />
        <Recipe />
      </div>
      <div className="recipes d-flex justify-content-around">
        <h5>The most popular</h5>
        <button className="number border-0 text-light">
          17<i className="fas fa-arrow-right ps-2 text-light"></i>
        </button>
      </div>
      <div className="scroll-container d-flex">
        <RecipeFav />
        <RecipeFav />
        <RecipeFav />
        <RecipeFav />
        <RecipeFav />
        <RecipeFav />
        <RecipeFav />
      </div>
    </div>
  </div>
);
