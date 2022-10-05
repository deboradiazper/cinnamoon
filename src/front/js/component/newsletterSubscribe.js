import React, { useState } from "react";
import db from "../../firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

export const NewsletterSubscribe = () => {
  const [input, setInput] = useState("");
  const inputHandler = (e) => {
    setInput(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (input) {
      console.log(input);
      //add to firebase
      db.collection("emails").add({
        email: input,
        time: firebase.firestore.FieldValue.serverTimestamp(),
      });
      setInput("");
    }
  };
  return (
    <div className="col-sm-12 col-md-6 col-lg-6">
      <p className="footermailing">Suscríbete a nuestra newsletter</p>
      <form className="newsletter" onSubmit={submitHandler}>
        <div className="col-6 col-md-4">
          <p className="contacto mb-0">Email</p>
          <input type="email" value={input} onChange={inputHandler}></input>
        </div>
        <div className="col-6 col-md-4">
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
        </div>
      </form>
    </div>
  );
};
