import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const FavUser = () => {
    const { store, actions } = useContext(Context);

    return (
        <div>
            <div className="hero-container">
                <div className="hero"></div>
                <div className="hero-stuff">
                    <h3 className="hero-title"> Mis recetas favoritas </h3>
                </div>
                <div className="hero-button2">
                    <Link className=" btn btn-user border-0" to="/recipefav">
                        VER </Link>
                </div>
            </div>
        </div>
    );
};
export default FavUser;