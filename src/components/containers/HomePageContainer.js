import React, { Component } from "react";
import { connect } from "react-redux";
//import PropTypes from "prop-types";AIzaSyDKscmfqF_tqvOmBYaDYpLb6TZtjwHrcR4
import { fetchNewestTenThunk } from "../../thunks";
import { HomePageView } from "../views";

class HomePageContainer extends Component {
  componentDidMount() {
    this.props.fetchNewestTen();
  }

  render() {
    return <HomePageView 
    user={this.props.user}
    newestTen={this.props.books}
    />;
  }
}
const mapState = (state) => {
return {
  user: state.user,
  books: state.books,
};
};

// Map dispatch to props;
const mapDispatch = (dispatch) => {
  return {
    fetchNewestTen: () => dispatch(fetchNewestTenThunk()),
  };
};

export default connect(mapState, mapDispatch)(HomePageContainer);
