import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchAllUsersThunk,} from "../../thunks";
import { LoginFormView } from "../views";

class LoginFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: "",
      isValidUser: false,
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
    const users=this.props.allUsers
    let errors = { ...this.state.errors };
    let isValidUser = false;
    let id=0;
    for(let i=0;i<users.length;i++){
       if(this.state.userName===users[i].userName&&this.state.password===users[i].password){
        isValidUser = true;
        this.props.history.push(`/users/${users[i].id}`);
        break;
      }
    }
    if (isValidUser) {
      errors.userName = "Valid user";
    }
    else{
      errors.userName = "Invalid username or password";
    }
    this.setState({ id,isValidUser, errors });
  };

  handleSubmit = (e) => {
     e.preventDefault();
    this.validateUser()
  };
  render() {
    return (
      <>
        {/* Can potentially be extracted into its own ErrorMessage component */}
        <div className="text-danger">
        {this.state.isValidUser ?``: this.state.errors.userName}
        </div>
        <LoginFormView
          userName={this.state.userName}
          password={this.state.password}
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
const mapDispatch = (dispatch) => {
  return {
    fetchAllUsers: () => dispatch(fetchAllUsersThunk()),
  };
};

LoginFormContainer.propTypes = {
    allUsers: PropTypes.array.isRequired,
    fetchAllUsers: PropTypes.func.isRequired,
};

export default connect(mapState, mapDispatch)(LoginFormContainer);