import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams, useResolvedPath } from "react-router-dom";
import { Context } from "../store/appContext";
import FavUser from "../component/favUser";
import TableUser from "../component/tableUser";
import imgfav from "../../img/imgfav.png";


export const UserArea = () => {
    const { store, actions } = useContext(Context);
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 my-3 pt-3">
                    <h4 className="user-name text-center">Hola {store.user} </h4>
                    <p className="user-mail text-center"> {store.mail} </p>
                    <div className="d-flex justify-content-center">ANIMO DEBORA</div>
                </div>
                <div className="col-md-6 mt-5">
                    <FavUser />
                </div>

                <div className="col-md-6 mt-5">
                    <TableUser />
                </div>
            </div>
        </div>
    );
};
