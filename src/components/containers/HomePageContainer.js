import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchNewestTenThunk } from "../../thunks";
import { HomePageView } from "../views";

class HomePageContainer extends Component {
  componentDidMount() {
    this.props.fetchNewestTen();
  }

  render() {
    return <HomePageView 
    user={this.props.user}
    newestTen={this.props.newestTen}
    />;
  }
}
const mapState = (state) => {
return {
  user: state.user,
};
};

// Map dispatch to props;
const mapDispatch = (dispatch) => {
  return {
    fetchNewestTen: () => dispatch(fetchNewestTenThunk()),
  };
};

// Type check props;
HomePageContainer.propTypes = {
  newestTen: PropTypes.array.isRequired,
};

export default connect(mapState)(HomePageContainer);
