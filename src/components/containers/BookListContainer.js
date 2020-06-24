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
  check(){
    console.log(this.props.book)
  }
  render() {
    return <button onClick={()=>this.check()}>BOOKS</button>;
  }
}
const mapState = (state) => {
  console.log(state.books)
  return { book: state.books };
};
const mapDispatch = (dispatch) => {
  return {
    fetchBooks: () => dispatch(fetchBooksThunker()),
  };
};
export default connect (mapState,mapDispatch)(BookListContainer);
