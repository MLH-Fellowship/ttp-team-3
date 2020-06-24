import React from "react";
import PropTypes from "prop-types";

const SignupFormView = (props) => {
  return (
    <div className="center">
      <div className="text-center">
      
      <form className="form-signin" onSubmit={props.handleSubmit}>
      <h2 className="h3 mb-3 font-weight-normal">Sign Up</h2>
      <br/>
        <div>
          Username:{" "}
          <input
          className="form-control"
            value={props.userName}
            name="userName"
            onChange={props.handleChange}
            required
          ></input>
        </div>
        <div>
          Password:{" "}
          <input
          className="form-control"
            value={props.password}
            type="password"
            name="password"
            onChange={props.handleChange}
            required
          ></input>
        </div>
        <div>
        email:{" "}
          <input
          className="form-control"
            type="email"
            value={props.email}
            name="email"
            onChange={props.handleChange}
            required
          ></input>
        </div>
        <br/>
        <button className="btn btn-primary">Signup</button>
      </form>
      </div>
    </div>
  );
};

SignupFormView.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  userName: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default SignupFormView;
