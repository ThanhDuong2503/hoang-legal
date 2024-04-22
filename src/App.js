import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Impressum from "./pages/impressum/Impressum";
import Privacy from "./pages/privacy/Privacy";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/datenschutz" element={<Privacy />} />
      </Routes>
    </div>
  );
}

export default App;
