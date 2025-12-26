import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Todos from "./pages/Todos";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
    <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      <Navbar />
      <Routes>
        {/* Todo page stays HOME */}
        <Route path="/" element={<Todos />} />

        {/* Extra home page */}
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
