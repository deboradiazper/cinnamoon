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
    <div>
      <div className="registration col-12 mb-3 mt-5 text-center">
        <h2>REGISTRATE</h2>
        <p>
          Unete a nuestra comunidad y descubre recetas deliciosas y saludables
          que se adapten a ti.
        </p>
      </div>
      <div className="row">
        <form className="form" onSubmit={sendInfo} id="registration">
          <div className="col-12 mb-3 mt-4 text-center">
            <input
              className="input-reg"
              name="Nombre"
              placeholder=" Nombre"
              autoComplete="off"
              type="text"
              onChange={handleInputChange}
            />
          </div>

          <div className="col-12  mb-3 text-center">
            <input
              className="input-reg"
              name="Apellido"
              placeholder=" Apellido"
              autoComplete="off"
              type="text"
              onChange={handleInputChange}
            />
          </div>

          <div className="col-12 mb-3 text-center">
            <input
              className="input-reg"
              name="email"
              placeholder=" Email"
              autoComplete="off"
              type="text"
              onChange={handleInputChange}
            />
          </div>

          <div className="col-12  mb-5 text-center">
            <input
              className="input-reg"
              name="Contraseña"
              placeholder=" Contraseña"
              autoComplete="off"
              type="Contraseña"
              onChange={handleInputChange}
            />
          </div>

          <div className="col-12  mb-3 text-center">
            <button className="send" type="submit">
              ENVIAR
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
