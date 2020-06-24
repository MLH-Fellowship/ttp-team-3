import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const NavBarView = (props) => {
  let LoginDisplay;
  if (props.user.id) {
    LoginDisplay = (
      <li className="nav-item">
        <Link to={`/users/${props.user.id}`} className="nav-link">
          Hi,{props.user.userName}
        </Link>
      </li>
    );
  } else {
    LoginDisplay = (
      <li className="nav-item">
        <Link to="/login" className="nav-link">
          Login
        </Link>
      </li>
    );
  }

  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-info">
      <Link to="/home" className="navbar-brand">
        Book Store
      </Link>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/home" className="nav-link">
              Home
            </Link>
          </li>
          {LoginDisplay}
        </ul>
        <form
          className="form-inline mt-2 mt-md-0"
          onSubmit={props.handleSubmit}
        >
          <input
            value={props.search}
            name="search"
            onChange={props.handleChange}
            className="form-control mr-sm-2"
            type="text"
            placeholder="Search"
            aria-label="Search"
          ></input>
          <button
            className="btn btn-outline-light my-2 my-sm-0 bg-primary"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};
NavBarView.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,

};
export default NavBarView;
