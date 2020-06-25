import React, { Component } from "react";
//import PropTypes from "prop-types";
import { connect } from "react-redux";
import {searchBooksThunk} from "../../thunks";
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
     this.props.searchBooks(this.state);
  };
  render() {
    return <NavBarView 
    user={this.props.user}
    search={this.state.search}
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
const mapDispatch = (dispatch, ownProps) => {
  return {
    searchBooks: (Search) => dispatch(searchBooksThunk(Search, ownProps)),
  };
};
export default withRouter(connect(mapState,mapDispatch)(NavBarContainer));
