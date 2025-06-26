import "./works.style.css";
import { works } from "./data";
import { useState } from "react";

const Works = () => {
  const [selectedGroup, setSelectedGroup] = useState("All");

  const filteredWorks =
    selectedGroup === "All"
      ? works
      : works.filter((work) => work.group === selectedGroup);

  return (
    <div className="works-section">
      <div className="works-section-holder">
        <div className="works-heading-holder">
          <h1 className="works-heading">My works</h1>
          <span className="works-line"></span>
        </div>
        <div className="btn-holder">
          <button className="works-btn" onClick={() => setSelectedGroup("All")}>
            all
          </button>
          <button className="works-btn" onClick={() => setSelectedGroup("UX")}>
            ui/ux design
          </button>
          {/* <button className="works-btn" onClick={() => setSelectedGroup("All")}>
            html & css
          </button> */}
          <button
            className="works-btn"
            onClick={() => setSelectedGroup("React")}
          >
            react js
          </button>
          <button
            className="works-btn"
            onClick={() => setSelectedGroup("Node")}
          >
            node js
          </button>
        </div>

        <div className="cart-holder">
          {filteredWorks.map((work) => (
            <div className="cart">
              <div className="cart-width-holder">
                <img src={work.image} alt="image" className="cart-img" />
                <p className="cart-title">{work.title}</p>
                <p className="cart-text">{work.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Works;
