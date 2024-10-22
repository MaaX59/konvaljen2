// import { Meny, Front } from "./pages/front";
import Front from "./pages/front/front";
import About from "./pages/about/about";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Front />} />
        <Route path="/om-oss" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
