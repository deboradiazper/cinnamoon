import React, { Component } from "react";

export const Footer = () => (
  <div className="container-fluid p-0">
    <div className="diverse text-center">
      <h2>Cook the most healthy and delicious recipes</h2>
      <p>You can cook with us and consult your favorites recipes.</p>
      <button className="btn btn-large subscribe text-light border-0 px-3">
        subscribe
      </button>
    </div>
    <footer className="footer mt-auto py-3 text-center">
      <p>Follow us</p>
      <div className="iconsFooter">
        <span>
          <i class="fab fa-instagram px-2"></i>
        </span>
        <span>
          <i class="fab fa-pinterest px-2"></i>
        </span>
        <span>
          <i class="fab fa-twitter px-2"></i>
        </span>
      </div>
    </footer>
  </div>
);
