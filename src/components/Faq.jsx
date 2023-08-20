import { column_1, column_2, column_3 } from "../assets";

const Faq = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="title has-text-centered is-spaced">
          Caring is the new marketing
        </h2>
        <p className="subtitle has-text-centered">
          The Nexcent blog is the best place to read about the latest membership
          insights, <br />
          trends and more. See whos joining the community, read about how our
          community <br />
          are increasing their membership income and lots more.
        </p>
        <div className="columns">
          <div className="column">
            <div className="card is-radiusless is-shadowless">
              <div className="card-image">
                <figure className="image">
                  <img src={column_1} />
                </figure>
              </div>
              <div className="card-content is-overlay">
                Creating Streamlined Safeguarding Processes with OneRen
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card is-radiusless is-shadowless">
              <div className="card-image">
                <figure className="image">
                  <img src={column_2} />
                </figure>
              </div>
              <div className="card-content is-overlay">
                What are your safeguarding responsibilities and how can you
                manage them?
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card is-radiusless is-shadowless">
              <div className="card-image">
                <figure className="image">
                  <img src={column_3} />
                </figure>
              </div>
              <div className="card-content is-overlay">
                Revamping the Membership Model with Triathlon Australia
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
