import React, { Component } from "react";
import { connect } from "react-redux";
//import PropTypes from "prop-types";AIzaSyDKscmfqF_tqvOmBYaDYpLb6TZtjwHrcR4
import { fetchNewestEightThunk } from "../../thunks";
import { HomePageView } from "../views";

class HomePageContainer extends Component {
  componentDidMount() {
    this.props.fetchNewestEight();
  }

  render() {
    return <HomePageView 
    user={this.props.user}
    newestEight={this.props.books}
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
    fetchNewestEight: () => dispatch(fetchNewestEightThunk()),
  };
};
export default connect(mapState, mapDispatch)(HomePageContainer);
