import { Routes, Route } from "react-router-dom";
import { Catalogo } from "./pages/Catalogo";
import NotFound from "./pages/NotFound";
import NavBar from "./components/NavBar";
import Trabajadores from "./pages/Trabajadores";
import Clientes from "./pages/Clientes";
import Login from "./pages/Login";
import './css/app.css'
import './css/styles.css'
import Pedidos from "./pages/Pedidos";
import Reportes from "./pages/Reportes";

function App() {
  return (
    <div className="app">
      <NavBar />
      <div className="app__pages">
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="catalogo" element={<Catalogo />} />
        <Route path="trabajadores" element={<Trabajadores/>}/>
        <Route path="clientes" element={<Clientes/>}/>
        <Route path="pedidos" element={<Pedidos/>}/>
        <Route path="reportes" element={<Reportes/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
      </div>
    </div>
  );
}

export default App;