import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const UserArea = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1>Hola, Ana</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <h2>Mis recetas favoritas</h2>
          <p>
            Aquí podrás teneer todas tus recetas favoritas en un mismo lugar
          </p>
        </div>
      </div>
      <div className="col-6">
        <h2>Miscelánea</h2>
        <p>Aquí podrás guardar información acerca de los ingredientes</p>
      </div>
    </div>
  );
};
