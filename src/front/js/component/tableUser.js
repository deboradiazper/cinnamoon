import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const TableUser = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="hero-container2 position-relative">
            <h3 className="hero-title text-center pt-5 mx-5">
                Añadir mis propias recetas
            </h3>
            <div class="position-absolute bottom-0 start-50 translate-middle-x mb-5">
                <Link to="/newrecipe" className="ctaUser">
                    <span>AÑADIR</span>
                    <svg viewBox="0 0 13 10" height="10px" width="15px">
                        <path d="M1,5 L11,5"></path>
                        <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                </Link>
            </div>
        </div>
    );
};
export default TableUser;
