import React from "react";
import PropTypes from "prop-types";

const EditUserFormView = (props) => {
  return (
    <div className="center">
      <div className="text-center">
      
      <form className="form-signin" onSubmit={props.handleSubmit}>
      <h2 className="h3 mb-3 font-weight-normal">Account Info</h2>
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
            name="password"
            onChange={props.handleChange}
            required
          ></input>
        </div>
        <br/>
        <button className="btn btn-primary">Confirm</button>
      </form>
      </div>
    </div>
  );
};

EditUserFormView.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  userName: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
};

export default EditUserFormView;