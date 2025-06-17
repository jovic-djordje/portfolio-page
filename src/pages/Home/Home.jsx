import { Link } from "react-router-dom";
import { SlSocialFacebook } from "react-icons/sl";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaDribbble } from "react-icons/fa";
import "./home.style.css";

const Home = () => {
  return (
    <div className="home-section">
      <div className="home-section-holder">
        <img
          src="https://png.pngtree.com/png-vector/20230903/ourmid/pngtree-3d-illustration-avatar-profile-man-png-image_9945226.png"
          alt="profile picture"
          className="profile-pic"
        />
        <h1 className="home-heading">
          Hi, I am <span>đorđe jović</span>
        </h1>
        <p className="home-text">
          I am a frontend web developer. I can provide clean code and pixel
          design. I also make website more & more interactive with web
          animations.
        </p>
        <div className="socials-holder">
          <Link
            to="https://www.facebook.com/"
            className="icon-holder"
            target="_blank"
          >
            <SlSocialFacebook className="icon" />
          </Link>
          <Link to="https://x.com/" className="icon-holder" target="_blank">
            <FaXTwitter className="icon" />
          </Link>
          <Link
            to="https://github.com/"
            className="icon-holder"
            target="_blank"
          >
            <FaGithub className="icon" />
          </Link>

          <Link
            to="https://www.linkedin.com/"
            className="icon-holder"
            target="_blank"
          >
            <FaLinkedin className="icon" />
          </Link>
          <Link
            to="https://dribbble.com/"
            className="icon-holder"
            target="_blank"
          >
            <FaDribbble className="icon" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
