import React, { Component } from "react";
import PropTypes from "prop-types";
import { fetchUserThunk, editUserThunk } from "../../thunks";
import { connect } from "react-redux";
import { EditUserFormView } from "../views";

class EditUserFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: "",
    };
  }

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.id).then(({ payload }) => {
      this.setState(payload);
    });
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const id = this.props.match.params.id;
    this.props.editUser(id, this.state);
    this.props.history.push(`/users/${id}`);
  };

  render() {
    return (
      <EditUserFormView
        userName={this.state.userName}
        password={this.state.password}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
      />
    );
  }
}

const mapState = (state) => {
  return { campus: state.campus };
};

const mapDispatch = (dispatch) => {
  return {
    fetchUser: (id) => dispatch(fetchUserThunk(id)),
    editUser: (id, campus) => dispatch(editUserThunk(id, campus)),
  };
};

EditUserFormContainer.propTypes = {
  fetchUser: PropTypes.func.isRequired,
  editUser: PropTypes.func.isRequired,
};

export default connect(mapState, mapDispatch)(EditUserFormContainer);