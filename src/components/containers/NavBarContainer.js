import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {} from "../../thunks";
import { withRouter } from "react-router";
import { NavBarView } from "../views";

class NavBarContainer extends Component {
  constructor(props){
    super(props);
    this.state={
      search:"",
    };
  }
  handleChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value,
      });
  };
  handleSubmit = (e) => {
    e.preventDefault();
     this.props.searchProducts(this.state);
  };
  render() {
    return <NavBarView 
    user={this.props.user}
    handleSubmit={this.handleSubmit}
    handleChange={this.handleChange}
    />;
  }
}
const mapState = (state) => {
  return {
    user:state.user,
  };
};
export default withRouter(connect(mapState)(NavBarContainer));
