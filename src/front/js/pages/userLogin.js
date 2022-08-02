import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

export const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { actions } = useContext(Context);

  const handleClick = () => {
    const opts = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    };

    fetch(process.env.BACKEND_URL + "/api/login", opts)
      .then((resp) => {
        if (resp.status === 200) return resp.json();
        else alert("Error");
      })
      .then((data) => {
        console.log(data.token);
        localStorage.setItem("token", data.token);
        actions.setToken(data.token);
      })
      .catch((error) => {
        console.error("There was an error", error);
      });
  };

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
