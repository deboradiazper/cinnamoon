import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0z70f2g",
        "template_fiv6qtn",
        form.current,
        "gEBXxoGV0kGWGUFfg"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input className="user_name" type="text" name="user_name" />
      <label>Email</label>
      <input className="user_email" type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" className="message" />
      <button className="suscribe">
        <span className="hover-underline-animation">Enviar</span>
        <svg
          viewBox="0 0 46 16"
          height="10"
          width="30"
          xmlns="http://www.w3.org/2000/svg"
          id="arrow-horizontal"
        >
          <path
            transform="translate(30)"
            d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
            data-name="Path 10"
            id="Path_10"
          ></path>
        </svg>
      </button>
    </form>
  );
};
