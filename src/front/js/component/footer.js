import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Contact } from "./contact";
import { NewsletterSubscribe } from "./newsletterSubscribe";

export const Footer = () => {
  return (
    <footer className="footer m-auto mt-5 suscribirse">
      <div className="row mx-2">
        <div className=" col-md-12 my-3 d-flex justify-content-center">
          <Contact />
          <NewsletterSubscribe />
        </div>
      </div>
    </footer>
  );
};
