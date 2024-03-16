import { Link } from "react-router-dom";
import React, { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsLoggedIn(true);
  };

  return (
    <div className="contenedor">
      <div className="fondo-Contenedor">
        <img src="imagenParaFondo" alt="JuanitoStore" />
        <div className="DivDegradado"></div>
      </div>
      <div className="login-Contenedor">
        <h1>Login</h1>
        <div className="contenedor-Formik">
          <div className="contenedor-Centrador">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Link to={"app/"}>Hola</Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}