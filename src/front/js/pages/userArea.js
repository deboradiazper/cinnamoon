import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams, useResolvedPath } from "react-router-dom";
import { Context } from "../store/appContext";

export const UserArea = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 mt-5">
          <h2>Hola {store.user}</h2>
        </div>
        <div className="col-6">
          <h2>Mis recetas favoritas</h2>
          <p>
            Aquí podrás teneer todas tus recetas favoritas en un mismo lugar
          </p>
          {/* {store.favorites.map((item, index) => { */}
          {/* return ( */}
          {/* <div className="recipes-favorites bg-white" key={item}> */}
          {/* {index} */}
          {/* </div> */}
          {/* ); */}
          {/* })} */}
        </div>
      </div>
      <div className="col-6">
        <h2>Miscelánea</h2>
        <p>Aquí podrás guardar información acerca de los ingredientes</p>
      </div>
    </div>
  );
};
