import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { actions, store } = useContext(Context);
  const navigate = useNavigate();

  console.log("this is your token", store.token);

  const handleClick = () => {
    actions.login(email, password);
  };

  if (store.token && store.token != "" && store.token != undefined)
    navigate.push("/");

  return (
    <div className="container">
      <div className="text-center mt-5">
        <h1>login</h1>
        <div>
          <input
            name="email"
            value={email}
            placeholder="your email here"
            autoComplete="off"
            type="text"
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            name="password"
            value={password}
            placeholder="your password here"
            autoComplete="off"
            type="password"
            onChange={(event) => setPassword(event.target.value)}
          />
          <button onClick={handleClick}>login</button>
        </div>
      </div>
    </div>
  );
};
