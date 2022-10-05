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
    <div className="col-sm-12 col-md-6 col-lg-6">
      <p className="footermailing">Contacta con nosotros </p>
      <form ref={form} className="" onSubmit={sendEmail}>
        <div className="col-6 col-md-4">
          <p className="contacto mb-0">Email</p>
          <input type="text" className="user" name="user_email" />
        </div>

        <div className="col-6 col-md-4">
          <p className="contacto mb-0">Mensaje</p>
          <input type="text" className="user" name="message" />
        </div>

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
    </div>
  );
};
