import { groups, payments, events } from "../assets";
const Achievements = () => {
  return (
    <section className="section achievements_bg">
      <div className="container">
        <div className="columns is-vcentered has-text-centered-mobile">
          <div className="column">
            <h5 className="title is-spaced">
              Helping a local
              <br />
              <span>business reinvent itself</span>
            </h5>
            <p className="subtitle">
              We reached here with our hard work and dedication
            </p>
          </div>
          <div className="column">
            <div className="columns ">
              <div className="column is-narrow">
                <article className="media">
                  <figure className="media-left">
                    <p className="image is-48x48 ">
                      <img src={groups} alt="" />
                    </p>
                  </figure>
                  <div className="media-content">
                    <div className="content">
                      <h5 className="title">
                        <strong>2,245,341</strong>
                      </h5>
                      <p className="subtitle">members</p>
                    </div>
                  </div>
                </article>
              </div>
              <div className="column is-narrow">
                <article className="media">
                  <figure className="media-left">
                    <p className="image is-48x48">
                      <img src={groups} alt="" />
                    </p>
                  </figure>
                  <div className="media-content">
                    <div className="content">
                      <h5 className="title">
                        <strong>46,328</strong>
                      </h5>
                      <p className="subtitle">clubs</p>
                    </div>
                  </div>
                </article>
              </div>
            </div>
            <div className="columns">
              <div className="column is-narrow is-half">
                <article className="media">
                  <figure className="media-left">
                    <p className="image is-48x48">
                      <img src={events} alt="" />
                    </p>
                  </figure>
                  <div className="media-content">
                    <div className="content">
                      <h5 className="title">
                        <strong>828,867</strong>
                      </h5>
                      <p className="subtitle">event bookings</p>
                    </div>
                  </div>
                </article>
              </div>
              <div className="column is-narrow">
                <article className="media">
                  <figure className="media-left">
                    <p className="image is-48x48">
                      <img src={payments} alt="" />
                    </p>
                  </figure>
                  <div className="media-content">
                    <div className="content">
                      <h5 className="title">
                        <strong>1,926,436</strong>
                      </h5>
                      <p className="subtitle">payments</p>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
