import { members, association, clubs } from "../assets/";
const Community = () => {
  return (
    <section className="section">
      <div className="container is-fluid">
        <h2 className="title is-spaced">
          Manage your entire community
          <br /> in a single system
        </h2>
        <p className="subtitle has-text-centered">Who is Nextcent suitable for?</p>
        <div className="columns is-multiline is-centered">
          <div className="column is-one-third is-narrow">
            <figure className="has-text-centered">
              <img src={members} alt="members" width="64px" height="64px" />
            </figure>

            <h4 className="title is-spaced has-text-centered">
              Membership
              <br /> Organisations
            </h4>
            <p className="subtitle has-text-centered">
              Our membership management software provides full automation of
              membership renewals and payments.
            </p>
          </div>
          <div className="column is-one-third is-narrow">
            <figure className="has-text-centered">
              <img src={association} alt="members" width="64px" height="64px" />
            </figure>
            <h4 className="title is-spaced has-text-centered">
              National
              <br /> Associations
            </h4>
            <p className="subtitle has-text-centered">
              Our membership management software provides full automation of
              membership renewals and payments.
            </p>
          </div>
          <div className="column is-one-third is-narrow">
            <figure className="has-text-centered">
              <img src={clubs} alt="members" width="64px" height="64px" />
            </figure>
            <h4 className="title is-spaced has-text-centered">
              Clubs And <br />
              Groups
            </h4>
            <p className="subtitle has-text-centered">
              Our membership management software provides full automation of
              membership renewals and payments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
