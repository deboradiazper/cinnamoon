import React, { useState, useEffect } from "react";

export const UserRegistration = () => {
  const [info, setInfo] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    //console.log(event.target.value);
    setInfo({
      ...info,
      [event.target.name]: event.target.value,
    });
  };

  const sendInfo = (event) => {
    event.preventDefault();
    console.log(info);
    addInfo(info);
  };

  //llamada fetch api
  const addInfo = (info) => {
    fetch(
      "https://3001-deboradiazper-cinnamoon-3avbj4xkusr.ws-eu54.gitpod.io/api/user",
      {
        method: "POST",
        body: JSON.stringify(info),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((resp) => {
        return resp.json(); // (regresa una promesa) will try to parse the result as json as return a promise that you can .then for results
      })
      .then((data) => {
        //Aquí es donde debe comenzar tu código después de que finalice la búsqueda
        console.log(data); //esto imprimirá en la consola el objeto exacto recibido del servidor
      })
      .catch((error) => {
        //manejo de errores
        console.log(error);
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
          <form className="registerForm" onSubmit={sendInfo}>
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
                type="password"
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
