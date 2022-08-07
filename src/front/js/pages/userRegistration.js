import React, { useState, useEffect } from "react";
import "../../styles/index.css";
import { useNavigate } from "react-router-dom";

export const UserRegistration = () => {
  const [info, setInfo] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

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
    navigate("/registrationValidated");
  };

  //llamada fetch api
  const addInfo = (info) => {
    fetch(process.env.BACKEND_URL + "/api/user", {
      method: "POST",
      body: JSON.stringify(info),
      headers: {
        "Content-Type": "application/json",
      },
    })
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
    <div className="containerForm col-12 mb-3 text-center">
      <h2>
        <strong>Regístrate</strong>
      </h2>
      <p>
        Únete a nuestra comunidad y accede a más de 500 recetas seleccionadas
        cuidadosamente para ti. Totalmente gratuito.
      </p>

      <div className="row">
        <div className="col-12 mb-3 text-center">
          <form onSubmit={sendInfo}>
            <div className="col-12 mb-3 text-center">
              <p>Nombre</p>
              <input
                name="name"
                placeholder=""
                autoComplete="off"
                type="text"
                onChange={handleInputChange}
              />
            </div>

            <div className="col-12 mb-3 text-center">
              <p>Apellidos</p>
              <input
                name="lastName"
                placeholder=""
                autoComplete="off"
                type="text"
                onChange={handleInputChange}
              />
            </div>

            <div className="col-12 mb-3 text-center">
              <p>Correo electrónico</p>
              <input
                name="email"
                placeholder="@"
                autoComplete="off"
                type="text"
                onChange={handleInputChange}
              />
            </div>

            <div className="col-12 mb-3 text-center">
              <p>Contraseña</p>
              <input
                name="password"
                placeholder=""
                autoComplete="off"
                type="password"
                onChange={handleInputChange}
              />
            </div>

            <div className="col-12 mb-3 text-center">
              <button className="button" type="submit">
                send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
