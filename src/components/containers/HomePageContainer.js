import React, { Component } from "react";
import { fetchNewestBooksThunker } from "../../thunks";
import { connect } from "react-redux";


import { HomePageView } from "../views";

class HomePageContainer extends Component {

  componentDidMount() {
    //this.props.fetchAllCampuses();
    this.props.fetchNewestBooks();
    
  }

  render() {
    return <HomePageView 
    user={this.props.user}
    book={this.props.book}
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
    fetchNewestBooks: () => dispatch(fetchNewestBooksThunker()),
  };
};

export default connect(mapState)(HomePageContainer);
