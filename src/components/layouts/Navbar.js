import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = ({ icon, title }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary text-white">
      <Link className="navbar-brand" to="/">
        <i className={icon}></i> {title}
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#main-nav"
        aria-controls="main-nav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="main-nav">
        <div className="navbar-nav">
          <Link className="nav-item nav-link active" to="/">
            صفحه اصلی
          </Link>
          <Link className="nav-item nav-link" to="/about">
            درباره ما
          </Link>
          <Link className="nav-item nav-link " to="/contact">
            تماس با ما
          </Link>
        </div>
      </div>
    </nav>
  );
};
Navbar.defaultProps = {
  title: "جستجوگر گیت هاب",
  icon: "fa fa-github",
};
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
