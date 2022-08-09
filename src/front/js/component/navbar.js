import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

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
    <nav className="navbar d-flex justify-content-around align-items-center px-5">
      <div className="container-fluid">
        <Link className="navbar-brand" to={"/"}>
          <span className="logo">
            <h4 className="logo">CINNAMOON</h4>
          </span>
        </Link>
        <div className="icons d-flex justify-content-around align-items-center">
          <i className="far fa-moon me-3"></i>

          {store.auth ? (
            <button
              className="logout border-0"
              onClick={() => {
                actions.logout();
                navigate("/");
              }}
            >
              <i class="fas fa-user-times"></i>
            </button>
          ) : (
            <button
              className="loging border-0"
              onClick={() => {
                isAuthenticate();
              }}
            >
              <i className="far fa-user me-2"></i>
            </button>
          )}
          <div className="btn dropstart">
            <button
              type="button"
              className="bars btn dropdown border-0"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="fas fa-bars fa-2x"></i>
            </button>
            <ul className="dropdown-menu p-3 mb-5 bg-body rounded border-0">
              <li>Recipes</li>
              <li>Curiosities</li>
              <li>About us</li>
              <li>Contact</li>
              <li>Settings</li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>Loging</li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
