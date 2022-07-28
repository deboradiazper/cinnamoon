import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  const [data, setData] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    console.log(event.target.value);
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      <div className="container col-12 mb-3 text-center">
        <h2>Join us!</h2>
        <p>
          Join our community and learn about health. It's totally free! Lorem
          ipsum blablablalblablal
        </p>
      </div>
      <div className="row">
        <div className="col-12 mb-3 text-center">
          <form className="registerForm">
            <div className="col-12 mb-3 text-center">
              <input
                name="name"
                placeholder="your name here"
                autoComplete="off"
                type="text"
                onChange={handleInputChange}
              />
            </div>

            <div className="col-12 mb-3 text-center">
              <input
                name="lastName"
                placeholder="your last name"
                autoComplete="off"
                type="text"
                onChange={handleInputChange}
              />
            </div>

            <div className="col-12 mb-3 text-center">
              <input
                name="email"
                placeholder="your mail"
                autoComplete="off"
                type="text"
                onChange={handleInputChange}
              />
            </div>

            <div className="col-12 mb-3 text-center">
              <input
                name="password"
                placeholder="your password"
                autoComplete="off"
                type="text"
                onChange={handleInputChange}
              />
            </div>

            <div className="col-12 mb-3 text-center">
              <button className="btn btn-primary" type="submit">
                send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

Single.propTypes = {
  match: PropTypes.object,
};
