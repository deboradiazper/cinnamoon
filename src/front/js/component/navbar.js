import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import cinnamoon from "../../img/cinnamoon.png";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  const navigate = useNavigate();

  const isAuthenticate = () => {
    if (store.auth) {
      navigate("/userArea");
    } else {
      navigate("/user");
    }
  };

  return (
    <nav className="navbar sticky-top d-flex justify-content-around align-items-center px-5 pb-0">
      <div className="container-fluid">
        <Link className="navbar-brand" to={"/"}>
          <span className="logo">
            <img
              src={cinnamoon}
              className="img-logo"
              alt="logo"
              width="70"
              height="70"
            />
          </span>
        </Link>
        <div className="icons d-flex justify-content-around align-items-center">
          {store.auth ? (
            <div>
              <p className="userNavbar text-3 px-2 mt-3"> Hola {store.user} </p>
            </div>
          ) : (
            ""
          )}
          <button className="ctamoon mx-4"> Moon </button>
          {store.auth ? (
            <>
              <Link to={"/userArea"}
                className="ctaLoging"

              >
                AREA USUARIO
              </Link>
              <button
                className="ctaLoging"
                onClick={() => {
                  const result = actions.logout();
                  if (result) {
                    navigate("/");
                  }
                }}
              >
                LOGOUT
              </button>
            </>
          ) : (
            <button
              className="ctaLoging"
              onClick={() => {
                isAuthenticate();
              }}
            >
              LOGIN
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};
