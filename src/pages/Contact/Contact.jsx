import "./contact.style.css";
import { LuPhone } from "react-icons/lu";
import { LuMail } from "react-icons/lu";
import { GrLocation } from "react-icons/gr";

const Contact = () => {
  return (
    <div className="contact-section">
      <div className="contact-section-holder">
        <h2 className="contact-heading">Contact us</h2>
        <div className="contact-info-holder">
          <div className="contact-info-left">
            <div className="contact-heading-holder">
              <h4 className="contact-info-heading">Contact information</h4>
              <p className="contact-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio ducimus soluta consequatur..
              </p>
            </div>
            <span className="line"></span>
            <div className="contact-info-carts">
              <div className="info-cart">
                <div className="cart-info-width-holder">
                  <div className="icon-holder">
                    <LuPhone className="icon" />
                  </div>
                  <div className="cart-text">
                    <p className="cart-title">Contact on phone</p>
                    <p className="num">+012-3456-7891</p>
                  </div>
                </div>
              </div>

              <div className="info-cart">
                <div className="cart-info-width-holder">
                  <div className="icon-holder">
                    <LuMail className="icon" />
                  </div>
                  <div className="cart-text">
                    <p className="cart-title">Contact on mail</p>
                    <p className="num">demomaol@mail.com</p>
                  </div>
                </div>
              </div>

              <div className="info-cart">
                <div className="cart-info-width-holder">
                  <div className="icon-holder">
                    <GrLocation className="icon" />
                  </div>
                  <div className="cart-text">
                    <p className="cart-title">Contact address</p>
                    <p className="num">
                      121 king street, melbourne,united states
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <div className="contact-form-holder">
              <div className="input-holder">
                <label htmlFor="name-input">Name</label>
                <input
                  type="text"
                  className="name-input input"
                  placeholder="Enter your name"
                />
              </div>
              <div className="input-holder">
                <label htmlFor="mail-input">Email</label>
                <input
                  type="text"
                  className="mail-input input"
                  placeholder="Enter your mail"
                />
              </div>
              <div className="input-holder">
                <label htmlFor="sub-input">Subject</label>
                <input
                  type="text"
                  className="sub-input input"
                  placeholder="Enter subject"
                />
              </div>

              <div className="input-holder">
                <label htmlFor="textbox">Message</label>
                <textarea
                  name="textbox"
                  class="textbox input"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <button className="contact-form-btn">Send mail</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
