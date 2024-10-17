import { Meny } from "./pages/front";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Meny />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
