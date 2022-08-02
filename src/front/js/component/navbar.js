import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar d-flex justify-content-around px-5">
      <div className="container-fluid">
        <Link className="navbar-brand" to={"/"}>
          <span className="logo">
            <h1>CINNAMON</h1>
          </span>
        </Link>
        <Link to="/userRegistration" className="btn btn-danger">
          Danger
        </Link>
        <div className="icons d-flex align-items-center">
          <span>
            <i className="user fas fa-user-circle fa-2x mx-4"></i>
          </span>
          <span>
            <i className="moon fas fa-moon fa-2x mx-4"></i>
          </span>
          <div className="btn-group dropstart ms-2">
            <button
              type="button"
              className="bars btn dropdown border-0
			"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="fas fa-align-justify fa-3x"></i>
            </button>
            <ul className="dropdown-menu p-3 shadow p-3 mb-5 bg-body rounded border-0">
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
