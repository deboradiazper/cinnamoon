import React, { useState, useEffect } from "react";
import "../../styles/index.css";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

export const UserRegistration = () => {
  const [info, setInfo] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const { register, errors, handleSubmit } = useForm();

  const handleInputChange = (event) => {
    //console.log(event.target.value);
    setInfo({
      ...info,
      [event.target.name]: event.target.value,
    });
  };

  //form submit
  const onSubmit = (data, e) => {
    e.preventDefault();
    console.log(info);
    addInfo(info);
    //   if (info) {
    //   //navigate("/home")
    // }
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
        <h2>Regístrate</h2>
      </div>

      <div className="row">
        <form
          className="form"
          onSubmit={handleSubmit(onSubmit)}
          id="registration"
        >
          <div className="col-12 mb-3 mt-4 text-center">
            <input
              className="input-reg"
              name="name"
              placeholder=" Nombre"
              autoComplete="off"
              type="text"
              {...register("nombre obligatorio", { required: true })}
              onChange={handleInputChange}
            />
          </div>
          <span className="text-danger text-small d-block mb-2">
            {errors?.name?.message}
          </span>

          <div className="col-12  mb-3 text-center">
            <input
              className="input-reg"
              name="lastName"
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
              name="password"
              placeholder=" Contraseña"
              autoComplete="off"
              type="password"
              onChange={handleInputChange}
            />
          </div>

          <div className="col-12  mb-3 text-center">
            <button className="ctaregister">
              <span>Enviar</span>
              <svg viewBox="0 0 13 10" height="10px" width="15px">
                <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
