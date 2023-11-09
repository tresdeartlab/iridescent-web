import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Store, Sale, Home, AboutIridescent } from "./components/pages";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/AboutIridescent" element={<AboutIridescent />} />
        <Route path="/Store" element={<Store />} />
        <Route path="/Sale" element={<Sale />} />
      </Routes>
    </div>
  );
}

export default App;
