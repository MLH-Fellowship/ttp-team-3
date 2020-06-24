import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { SignupFormView } from "../views";
import { addUserThunk,fetchAllUsersThunk } from "../../thunks";

class SignupFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: "",
      email: "",
      isValidName: false,
      errors: {},
    };
  }
  componentDidMount() {
    this.props.fetchAllUsers();
  }

  handleChange = (e) => {

      this.setState({
        [e.target.name]: e.target.value,
      });
  };

  validateUser = () => {
      //check is the userName length great than 5 and not duplicate username in database
      const users=this.props.allUsers
    const { userName } = this.state;
    let errors = { ...this.state.errors };
    let isValidName = true;
    if (userName.length < 5) {
      isValidName = false;
      errors.userName = "Invalid username, please enter more than 4 characters";
    }
    for(let i=0;i<users.length;i++){
      if(this.state.userName===users[i].userName){
        isValidName = false;
        errors.userName = "Invalid username, duplicate name";
       break;
     }
   }
    if (isValidName) {
      this.props.addUser(this.state)
      errors.userName = "valid username";
    }
    this.setState({ isValidName, errors });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.validateUser();
  };
 
  render() {
    return (
      <>
        {/* Can potentially be extracted into its own ErrorMessage component */}
        <div className="text-danger">
        {this.state.isValidName ? "" : this.state.errors.userName}
        </div>
        <SignupFormView
          userName={this.state.userName}
          password={this.state.password}
          email={this.state.email}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
      </>
    );
  }
}
const mapState = (state) => {
  return {
    allUsers: state.allUsers,
  };
};
const mapDispatch = (dispatch, ownProps) => {
  return {
    fetchAllUsers: () => dispatch(fetchAllUsersThunk()),
    addUser: (User) => dispatch(addUserThunk(User, ownProps)),
  };
};

SignupFormContainer.propTypes = {
  allUsers: PropTypes.array.isRequired,
  addUser: PropTypes.func.isRequired,
};

export default connect(mapState, mapDispatch)(SignupFormContainer);