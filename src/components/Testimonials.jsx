import { avatar } from "../assets";
import { tesla } from "../assets";

import { BiRightArrowCircle } from "react-icons/bi";
const Testimonials = () => {
  return (
    <section className="section testimonials_bg">
      <div className="container">
        <div className="columns is-vcentered">
          <div className="column">
            <img alt="tesla" src={tesla} />
          </div>
          <div className="column">
            <p className="sutitle">
              Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
              lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
              enim metus. Vivamus sed libero ornare, tristique quam in, gravida
              enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet
              elit at ligula molestie, nec molestie mi blandit. Suspendisse
              cursus tellus sed augue ultrices, quis tristique nulla sodales.
            </p>
            <div className="is-flex is-align-items-center is-justify-content-start mt-4">
              <a href="#" className="image is-48x48">
                <img alt="profile" src={avatar} className="is-rounded" />
              </a>
              <div className="is-flex is-flex-direction-column ml-2 is-align-content-space-between">
                <span className="font-semibold has-text-weight-bold">
                  Tim Smith
                </span>
                <span className="is-size-7 is-flex is-align-items-center">
                  British Dragon Boat Racing Association
                </span>
              </div>
            </div>

            <span className="icon-text mt-5 ">
              <span>
                <p className="subtitle">
                  <a>meet all customers</a>
                </p>
              </span>
              <span className="icon">
                <BiRightArrowCircle />
              </span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
