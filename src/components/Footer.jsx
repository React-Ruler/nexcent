import { LogoDark } from "../assets";
import { BiPaperPlane } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="columns">
          <div className="column is-one-quarter">
            <img src={LogoDark} alt="" width="191" height="30" />

            <p className="mt-3 mb-3">
              Copyright © 2023 Nexcent. All rights reserved
            </p>
          </div>
          <div className="column"></div>
          <div className="column"></div>
          <div className="column"></div>
          <div className="column is-narrow">
            <p className="has-text-weight-bold mb-3">Company</p>
            <ul>
              <li className="mb-2"><a>About Us</a></li>
              <li className="mb-2"><a>Blog</a></li>
              <li className="mb-2"><a>Contact Us</a></li>
              <li className="mb-2"><a>Pricing</a></li>
              <li className="mb-2"><a>Testimonials</a></li>
            </ul>
          </div>
          <div className="column"></div>
          <div className="column"></div>
          <div className="column is-narrow">
            <p className="has-text-weight-bold mb-3">Support</p>
            <ul>
              <li className="mb-2"><a>Help center</a></li>
              <li className="mb-2"><a>Terms of service</a></li>
              <li className="mb-2"><a>Legal</a></li>
              <li className="mb-2"><a>Privac Policy</a></li>
              <li className="mb-2"><a>Status</a></li>
            </ul>
          </div>
          <div className="column"></div>
          <div className="column"></div>
          <div className="column is-one-third">
            <p className="has-text-weight-bold mb-3">Stay Up to Date</p>
            <div className="field">
              <div className="control has-icons-right">
                <input
                  className="input is-hovered is-medium"
                  type="email"
                  placeholder="your email address"
                />

                <span className="icon is-small is-right">
                  <BiPaperPlane />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
