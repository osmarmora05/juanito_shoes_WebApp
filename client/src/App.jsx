import { Routes, Route } from "react-router-dom";
import { Catalogo } from "./pages/Catalogo";
import NotFound from "./pages/NotFound";
import NavBar from "./components/NavBar";
import './css/app.css'
import './css/styles.css'

function App() {
  return (
    <div className="app">
      <NavBar />
      <div className="app__pages">
      <Routes>
        <Route path="/" element={<Catalogo />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </div>
    </div>
  );
}

export default App;