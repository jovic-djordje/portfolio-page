import "./about.style.css";

const About = () => {
  return (
    <div className="about-section">
      <div className="about-section-holder">
        <img
          src="https://img.freepik.com/premium-photo/man-sitting-desk-with-laptop_979520-15397.jpg"
          alt="A man sitting at desk with laptop"
        />
        <div className="about-me">
          <h3 className="fullname">
            Hi, I am <span>đorđe jović</span>
          </h3>
          <ul className="list">
            <li className="list-item">First name : đorđe</li>
            <li className="list-item">Last name : jović</li>
            <li className="list-item">Age : 24</li>
            <li className="list-item">Nationality : serbian</li>
            <li className="list-item">Languages : english,french</li>
            <li className="list-item">Address : 121 king street</li>
            <li className="list-item">Freelance : Avaliable</li>
          </ul>
          <button className="about-btn">download resume</button>
        </div>
      </div>
    </div>
  );
};

export default About;
