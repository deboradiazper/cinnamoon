import React, { useState, useEffect, useContext } from "react";
import CreateRecipe from "../component/createRecipe"

export const NewRecipe = () => {

    return (
        <div className="container">
            <div className="row">
                <CreateRecipe />
            </div>
        </div>
    );
};