import React, {
    useState,
    useEffect,
    useContext
} from "react";
import PropTypes from "prop-types";
import {
    Link,
    useParams,
    useResolvedPath
} from "react-router-dom";
import {
    Context
} from "../store/appContext";
import FavUser from "../component/favUser";
import TableUser from "../component/tableUser";

export const UserArea = () => {
    const {
        store,
        actions
    } = useContext(Context);
    return ( <
        div className = "container" >
        <
        div className = "row" >
        <
        div className = "col-12 my-3 pt-3" >
        <
        h4 className = "user-name text-center" > Hola {
            store.user
        } < /h4> <
        p className = "user-mail text-center" > {
            store.mail
        } < /p> <
        div className = "d-flex justify-content-center" >
        <
        img src = "https://media.istockphoto.com/vectors/man-icon-profile-member-user-perconal-symbol-vector-on-white-isolated-vector-id1135031219?k=20&m=1135031219&s=170667a&w=0&h=0cjbtlApJKsRUlWKn91BFtBVB3efSne3KDCXihjN-yk="
        alt = "..."
        className = "image-user rounded-circle" /
        >
        <
        /div> <
        /div> <
        div className = "col-md-6 mt-5" >
        <
        FavUser / >
        <
        /div>

        <
        div className = "col-md-6 mt-5" >
        <
        TableUser / >
        <
        /div> <
        /div> <
        /div>
    );
};