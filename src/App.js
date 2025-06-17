// import { Meny, Front } from "./pages/front";
import Front from "./pages/front/front";
import Blommor from "./pages/blommor/Blommor.jsx";
import Tjanster from "./pages/tjanster/tjanster";
import KontaktSida from "./pages/kontakt/kontakSida.jsx";
import Brollop from "./pages/brollop/brollop.jsx";
import Begravning from "./pages/begravning/begravning.jsx";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Foretag from "./pages/foretag/foretag.jsx";
import Workshop from "./pages/workshop/workshop.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Front />} />
        <Route path="/blommor" element={<Blommor />} />
        <Route path="/tjanster" element={<Tjanster />} />
        <Route path="/kontakt" element={<KontaktSida />} />
        <Route path="/brollop" element={<Brollop />} />
        <Route path="/begravning" element={<Begravning />} />
        <Route path="/foretag" element={<Foretag />} />
        <Route path="/workshop" element={<Workshop />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
