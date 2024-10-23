// import { Meny, Front } from "./pages/front";
import Front from "./pages/front/front";
import About from "./pages/about/about";
import Tjanster from "./pages/tjanster/tjanster";
import KontaktSida from "./pages/kontakt/kontakSida.jsx";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Front />} />
        <Route path="/om-oss" element={<About />} />
        <Route path="/tjanster" element={<Tjanster />} />
        <Route path="/kontakt" element={<KontaktSida />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
