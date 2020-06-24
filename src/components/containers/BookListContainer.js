import React, { Component } from "react";
import { fetchBooksThunker } from "../../thunks";
import { connect } from "react-redux";



class BookListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    return <div>BOOKS</div>;
  }
}
const mapState = (state) => {
  console.log(state.books)
  return { book: state };
};
const mapDispatch = (dispatch) => {
  return {
    fetchBooks: () => dispatch(fetchBooksThunker()),
  };
};
export default connect (mapState,mapDispatch)(BookListContainer);
