import { logo } from "../assets";
const Navbar = () => {
  return (
    <nav
      className="navbar is-spaced is-transparent"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a className="navbar-item" href="">
          <img src={logo} width="155" height="24" />
        </a>

        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-end">
          <a className="navbar-item">Home</a>
          <a className="navbar-item">Services</a>
          <a className="navbar-item">Feature</a>
          <a className="navbar-item">Product</a>
          <a className="navbar-item">Testimonial</a>
          <a className="navbar-item">FAQ</a>

          <div className="navbar-item">
            <div className="buttons">
              <a className="button is-primary">Login</a>
              <a className="button is-link">Sign Up</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
