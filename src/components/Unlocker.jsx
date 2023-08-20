import { pana } from "../assets/";
const Unlocker = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="columns is-vcentered">
          <div className="column">
          <img src={pana} alt="Unlock" />
          </div>
          <div className="column">
            <h3 className="title is-spaced">
              How to design your site footer like we did
            </h3>
            <p className="subtitle">
              Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
              augue nec tincidunt molestie, massa nunc varius arcu, at
              scelerisque elit erat a magna. Donec quis erat at libero ultrices
              mollis. In hac habitasse platea dictumst. Vivamus vehicula leo
              dui, at porta nisi facilisis finibus. In euismod augue vitae nisi
              ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla
              commodo faucibus efficitur quis massa. Praesent felis est, finibus
              et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus
              ipsum id gravida.
            </p>
            <a className="button is-link">Learn More</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Unlocker;
