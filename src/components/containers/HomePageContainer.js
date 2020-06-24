import React, { Component } from "react";
import { connect } from "react-redux";


import { HomePageView } from "../views";

class HomePageContainer extends Component {
  render() {
    return <HomePageView 
    user={this.props.user}
    />;
  }
}
const mapState = (state) => {
return {
  user: state.user,
};
};

export default connect(mapState)(HomePageContainer);
