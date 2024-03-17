import { Routes, Route } from "react-router-dom";
import { Catalogo } from "./pages/Catalogo";
import NotFound from "./pages/NotFound";
import NavBar from "./components/NavBar";
import Trabajadores from "./pages/Trabajadores";
import Clientes from "./pages/Clientes";
import './css/app.css'
import './css/styles.css'

function App() {
  return (
    <div className="app">
      <NavBar />
      <div className="app__pages">
      <Routes>
        <Route path="catalogo" element={<Catalogo />} />
        <Route path="*" element={<NotFound />} />
        <Route path="trabajadores" element={<Trabajadores/>}/>
        <Route path="clientes" element={<Clientes/>}/>
      </Routes>
      </div>
    </div>
  );
}

export default App;