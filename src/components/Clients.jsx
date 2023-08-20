import { logo0, logo1, logo2, logo3, logo4, logo5 } from "../assets/";
const Clients = () => {
  return (
    <section className="section">
      <div className="container is-fluid">
        <h2 className="title is-spaced">Our Clients</h2>
        <p className="subtitle has-text-centered">
          We have been working with some Fortune 500+ clients
        </p>
        <div className="columns">
          <div className="column">
            <nav className="level is-mobile">
              <p className="level-item has-text-centered">
                <img src={logo0} alt="logo0" width="64px" height="64px" />
              </p>
              <p className="level-item has-text-centered">
                <img src={logo1} alt="logo1" width="64px" height="64px" />
              </p>
              <p className="level-item has-text-centered">
                <img src={logo2} alt="logo2" width="64px" height="64px" />
              </p>
            </nav>
          </div>
          <div className="column">
            <nav className="level is-mobile">
              <p className="level-item has-text-centered">
                <img src={logo3} alt="logo3" width="64px" height="64px" />
              </p>
              <p className="level-item has-text-centered">
                <img src={logo4} alt="logo4" width="64px" height="64px" />
              </p>
              <p className="level-item has-text-centered">
                <img src={logo5} alt="logo5" width="64px" height="64px" />
              </p>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
