import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "../css/LoginForm.css";
import JuanitoStoreImage from "../JuanitoStore.png";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate =useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/app/*")
  };
  const handleForgotPassword = () => {
    history.push("/forgot-password");
  };

  return (
    <div className="container">
      <div className="imagen-empresa">
        <img src={JuanitoStoreImage} alt="juantistore" />
        <div className="capa-opaca"></div>
      </div>
      <div className="formulario">
        <h1>Login</h1>
        <div className="container-caja">
          <div className="formulario-inner">
            <h2>Iniciar Sesión</h2>
            <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="usuario"
              placeholder="Usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="password"
              name="contrasena"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Link to="/forgot-password">¿Has olvidado tu contraseña?</Link>
            <div className="container-button">
              <button type="submit">Login</button>
            </div>
            </form>      
          </div>
        </div>
      </div>
    </div>
  );
}
