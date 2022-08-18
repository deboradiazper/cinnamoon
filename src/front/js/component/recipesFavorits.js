import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import Recipe from "./recipe";

const RecipesFavorits = () => {
    const { store, actions } = useContext(Context);
    // const listrecipesfav = store.recipesfavorites.map(() => {
    //  return <li>{item.name}</li>;
    // });

    useEffect(() => {
        actions.loadFavoritesRecipes();
    }, []);
    return (
        <div className="container">
            <div className="row">
                <h3 className="title-all mt-5">Mis Recetas favoritas</h3>

                {store.recipesfavorites.map((recipe, index) => {
                    return (
                        <div className="col-12 col-md-3 pt-3 mt-5" key={index}>
                            <Recipe
                                name={recipe.name}
                                id={recipe.id}
                                image={recipe.image}
                                categories={recipe.categories.map((value, index) => {
                                    return (
                                        <img className="categories" key={index} src={value.image} />
                                    );
                                })}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default RecipesFavorits;
