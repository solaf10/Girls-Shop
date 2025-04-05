import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import About from "./pages/About/About";
import Designers from "./pages/Designers/Designers";
import Contact from "./pages/Contact/Contact";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className="header-holder">
        <Header />
        <NavBar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/designers" element={<Designers />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
