import { illustration } from "../assets/";

const Hero = () => {
  return (
    <section className="hero is-fullheight">
      <div className="hero-body">
        <div className="container is-fluid">
          <div className="columns is-vcentered ">
            <div className="column is-half-desktop is-narrow-mobile">
              <h1 className="title is-spaced">
                Lessons and insights
                <br />
                <span>from 8 years</span>
              </h1>
              <p className="subtitle">
                Where to grow your business as a photographer: site or social
                media?
              </p>
              <a className="button is-link">Register</a>
            </div>
            <div
              className="column is-4 is-offset-2">
              <img src={illustration} width="391" height="407" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
