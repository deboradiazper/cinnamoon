import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Contact } from "./contact";
import { NewsletterSubscribe } from "./newsletterSubscribe";
import cinnamoon from "../../img/cinnamoon.png";

export const Footer = () => {
  return (
    <footer className="footer mt-5 m-auto">
      <div className=" containerfooter row my-3 d-flex pt-3">
        <Contact />
        <NewsletterSubscribe />
      </div>
    </footer>
  );
};
