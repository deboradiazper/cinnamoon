import React, { Component } from "react";

export const Footer = () => (
  <div className="container-fluid p-0 mt-5">
    <div className="diverse text-center">
      <h2>Cook the most healthy and delicious recipes</h2>
      <p className="text3">
        You can cook with us and consult your favorites recipes.
      </p>
      <button className="btn btn-large subscribe text-light border-0 px-3">
        subscribe
      </button>
    </div>
    <footer className="footer mt-auto py-3 text-center">
      <p>Follow us</p>
      <div className="iconsFooter">
        <span>
          <i class="fab fa-instagram px-3"></i>
        </span>
        <span>
          <i class="fab fa-pinterest px-3"></i>
        </span>
        <span>
          <i class="fab fa-twitter px-3"></i>
        </span>
      </div>
    </footer>
  </div>
);
