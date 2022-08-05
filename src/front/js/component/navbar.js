import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  return (
    <nav className="navbar d-flex justify-content-around align-items-center px-5">
      <div className="container-fluid">
        <Link className="navbar-brand" to={"/"}>
          <span className="logo">
            <h3>CINNAMON</h3>
          </span>
        </Link>
        <Link to="/userRegistration" className="btn btn-danger">
          Danger
        </Link>
        <div className="icons d-flex align-items-center">
          <img
            className="moon mx-4"
            src="https://cdn-icons-png.flaticon.com/128/8098/8098375.png"
          ></img>
          {store.token ? (
            <button
              onClick={() => {
                actions.logout();
              }}
            >
              Logout
            </button>
          ) : (
            <h1>Login</h1>
          )}
          <div className="btn dropstart">
            <button
              type="button"
              className="bars btn dropdown border-0"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                className="drop-down"
                src="https://cdn-icons-png.flaticon.com/512/1828/1828859.png"
              ></img>
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
