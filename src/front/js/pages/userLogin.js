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
    <div className="col-12 text-center mt-5">
      <h2>ACCEDE</h2>
      <div>
        <div className="row">
          <form onSubmit={handleSubmit} className="form">
            <div className="col-12 text-center mt-4 mb-3">
              <input
                name="email"
                value={email}
                placeholder=" Email"
                autoComplete="off"
                type="text"
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="col-12 text-center mb-5">
              <input
                name="Password"
                value={password}
                placeholder=" contraseña"
                autoComplete="off"
                type="password"
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <div className="col-12 text-center mb-3">
              <button className="login">ACCEDE</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
