// import { Meny, Front } from "./pages/front";
import Front from "./pages/front/front";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Front />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
