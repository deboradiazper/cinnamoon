import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { actions, store } = useContext(Context);
  const navigate = useNavigate();

  console.log("this is your token", store.token);

  const handleSubmit = (event) => {
    event.preventDefault();
    const result = actions.login(email, password);
    if (result) {
      navigate("/userArea");
    }
  };

  return (
    <div className="containerForm">
      <div className="col-12 mb-3 text-center">
        <h2>
          <strong>Accede</strong>
        </h2>
        <div className="row">
          <div className="col-12 mb-3 text-center">
            <form onSubmit={handleSubmit}>
              <p>Correo electrónico</p>
              <input
                className="email"
                value={email}
                placeholder=""
                autoComplete="off"
                type="text"
                onChange={(event) => setEmail(event.target.value)}
              />

              <div className="col-12 mb-3 text-center">
                <p>Contraseña</p>
                <input
                  className="password"
                  value={password}
                  placeholder=""
                  autoComplete="off"
                  type="password"
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
              <button>login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
