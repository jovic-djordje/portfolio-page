import { Link } from "react-router-dom";
import "./navigation.style.css";

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="navigation-holder">
        <h4 className="logo">React</h4>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/works">Works</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
