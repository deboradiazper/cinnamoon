import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

const TableUser = () => {
    const { store, actions } = useContext(Context);

    return (
        <div >
            <div className="hero-container2" >
                <div className="hero2" > </div>
                <div className="hero-stuff2" >
                    <h3 className="hero-title text-center" >
                        Añadir mis propias recetas
                    </h3>
                </div>
                <div className="hero-button" >
                    <button className="btn btn-user2 border-0" > AÑADIR </button>
                </div>
            </div>
        </div>
    );
};
export default TableUser;