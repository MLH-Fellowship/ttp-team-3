import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchUserThunk,
  signOutThunk,
} from "../../thunks";

import { UserView } from "../views";

class UserContainer extends Component {
  componentDidMount() {
    this.props.fetchUser(this.props.match.params.id);
  }
  handleSignout = (e) => {
    e.preventDefault();
    this.props.signOut();
    this.props.history.push(`/login`);
  };
  render() {
    return (
      <UserView
        user={this.props.user}
        handleSignout={this.handleSignout}
      />
    );
  }
}

// map state to props
const mapState = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchUser: (id) => dispatch(fetchUserThunk(id)),
     signOut:()=>dispatch(signOutThunk()),
  };
};

export default connect(mapState, mapDispatch)(UserContainer);