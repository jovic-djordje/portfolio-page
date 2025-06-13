import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Navigation from "./components/navigation/Navigation";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Works from "./pages/Works/Works";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/works" element={<Works />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
