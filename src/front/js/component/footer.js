import React, { Component } from "react";

export const Footer = () => (
  <div className="container-fluid p-0 mt-5">
    <div className="diverse">
      <div className="row d-flex">
        <h5 className="text-center mb-5">What can CINNAMON offer you?</h5>
        <div className="col-4 text-center px-5">
          <img
            className="register"
            src="https://cdn-icons-png.flaticon.com/512/3456/3456400.png"
          ></img>
          <p>Register in 2 seconds</p>
          <p className="text3">
            You can cook with us and consult your favorites recipes.
          </p>
        </div>
        <div className="col-4 text-center px-5">
          <img
            className="ingredients"
            src="https://cdn-icons-png.flaticon.com/128/2329/2329888.png"
          ></img>
          <p>Find healthiest recipes by ingredients</p>
          <p className="text3">
            You can cook with us and consult your favorites recipes.
          </p>
        </div>
        <div className="col-4 text-center px-5">
          <img
            className="cookbook"
            src="https://cdn-icons-png.flaticon.com/512/4388/4388461.png"
          ></img>
          <p>Create your own cookbook</p>
          <p className="text3">
            You can cook with us and consult your favorites recipes.
          </p>
        </div>
      </div>
      <div className="button-subscribe d-flex justify-content-center mt-4">
        <button className="btn btn-large subscribe text-light border-0 px-3">
          subscribe
        </button>
      </div>
    </div>
    <footer className="footer mt-auto py-3 text-center pt-4">
      <p>Follow us</p>
      <div className="iconsFooter">
        <img
          className="instagram mx-4 img-fluid"
          src="https://cdn-icons-png.flaticon.com/128/1077/1077042.png"
        ></img>
        <img
          className="tweet img-fluid"
          src="https://cdn-icons-png.flaticon.com/128/250/250558.png"
        ></img>
        <img
          className="pinterest mx-4 img-fluid"
          src="https://cdn-icons-png.flaticon.com/128/104/104628.png"
        ></img>
      </div>
    </footer>
  </div>
);
