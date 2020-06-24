import React from "react";
import { Link } from "react-router-dom";

const UserView = props => {
  return (
    <>
      <div className="row no-gutters">
        <div className="col-md-8 mx-auto">
          <h1>Welcome back, {props.user.userName}!</h1>
          <h2>
            <b>Email: </b>
            {props.user.email}
          </h2>
          <button className="btn btn-outline-primary mr-2">
            <Link to={`/users/${props.user.id}/edit`}>Edit Account Info</Link>
          </button>
          <button
            className="btn btn-outline-danger"
            onClick={props.handleSignout}
          >
            {" "}
            Sign out
          </button>
        </div>
      </div>
    </>
  );
};

export default UserView;