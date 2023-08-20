import { rafiki } from "../assets/";
const Unlock = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="columns is-vcentered">
          <div className="column">
            <img src={rafiki} alt="Unlock" />
          </div>
          <div className="column">
            <h3 className="title is-spaced">
              The unseen of spending three years at Pixelgrade
            </h3>
            <p className="subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
              Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
              tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
              Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
              elementum pulvinar odio.
            </p>
            <a className="button is-link">Learn More</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Unlock;
