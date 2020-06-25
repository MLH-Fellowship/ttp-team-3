import { React, Component } from "react";
import BookView from "../views/BookView";
import { connect } from "react-redux";
import { fetchBookThunk } from "../../thunks";

class BookContainer extends Component {
  render() {
    return <p>Whatever</p>; //<BookView book={this.props.book} />;
  }
}

const mapState = (state) => {
  console.log(state);
  return {
    book: state.book,
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchBook: (id) => dispatch(fetchBookThunk(id)),
  };
};

export default connect(mapState, mapDispatch)(BookContainer);
