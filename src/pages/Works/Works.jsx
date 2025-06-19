import "./works.style.css";

const Works = () => {
  return (
    <div className="works-section">
      <div className="works-section-holder">
        <div className="works-heading-holder">
          <h1 className="works-heading">My works</h1>
          <span className="works-line"></span>
        </div>
        <div className="btn-holder">
          <button className="works-btn">all</button>
          <button className="works-btn">ui/ux design</button>
          <button className="works-btn">html & css</button>
          <button className="works-btn">react js</button>
          <button className="works-btn">node js</button>
        </div>
        <div className="cart-holder">
          {/* CART ONE START  */}
          <div className="cart">
            <div className="cart-width-holder">
              <img
                src="https://img.buzzfeed.com/buzzfeed-static/static/2018-03/22/17/asset/buzzfeed-prod-web-06/sub-buzz-16434-1521755561-8.jpg?resize=990:990"
                alt="candle"
                className="cart-img"
              />
              <p className="cart-title">Candle</p>
              <p className="cart-text">Creative candle light</p>
            </div>
          </div>
          {/* CART ONE END  */}

          {/* CART TWO START  */}
          <div className="cart">
            <div className="cart-width-holder">
              <img
                src="https://assets.ptimgs.com/ptimgs/ab/images/dp/wcm/202316/0086/gallery-frames-set-of-6-h.jpg"
                alt="Creative wall painting"
                className="cart-img"
              />
              <p className="cart-title">Paint</p>
              <p className="cart-text">Creative wall painting</p>
            </div>
          </div>
          {/* CART TWO END  */}

          {/* CART THREE START  */}
          <div className="cart">
            <div className="cart-width-holder">
              <img
                src="https://www.mockupdaddy.com/wp-content/uploads/edd/2019/07/Ui-Design-Mockup.jpg"
                alt="Sample design mockup"
                className="cart-img"
              />
              <p className="cart-title">UI/UX sample</p>
              <p className="cart-text">UI/UX Sample design mockup</p>
            </div>
          </div>
          {/* CART THREE END  */}

          {/* CART FOUR START  */}
          <div className="cart">
            <div className="cart-width-holder">
              <img
                src="https://th.bing.com/th/id/OIP.Ay3Rm2Js4OQ3eKDVpux9tAHaFP?r=0&rs=1&pid=ImgDetMain"
                alt="Packet design mockup"
                className="cart-img"
              />
              <p className="cart-title">Packet</p>
              <p className="cart-text">Packet design mockup</p>
            </div>
          </div>
          {/* CART FOUR END  */}

          {/* CART FIVE START  */}
          <div className="cart">
            <div className="cart-width-holder">
              <img
                src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/12306c101634823.5f230eb11f9d2.jpg"
                alt="Another packet design mockup"
                className="cart-img"
              />
              <p className="cart-title">Packet</p>
              <p className="cart-text">Another packet design mockup</p>
            </div>
          </div>
          {/* CART FIVE END  */}

          {/* CART SIX START  */}
          <div className="cart">
            <div className="cart-width-holder">
              <img
                src="https://th.bing.com/th/id/OIP.4dMK58PlPeINyWnXKuRESQHaFt?w=249&h=191&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
                alt="Cream box design"
                className="cart-img"
              />
              <p className="cart-title">Cream</p>
              <p className="cart-text">Creative cream box design</p>
            </div>
          </div>
          {/* CART SIX END  */}
        </div>
      </div>
    </div>
  );
};

export default Works;
