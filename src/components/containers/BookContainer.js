import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchBookThunk
} from "../../thunks";

import { BookView } from "../views";

class BookContainer extends Component {

  // handleSubmit = (e) => {
  //   let item={
  //     barcode:this.props.book.barcode_number ,
  //     name:this.props.book.product_name,
  //     imageUrl:this.props.book.images[0],
  //     userId:this.props.user.id,

  //   }
    
  //   e.preventDefault();
  //   this.props.addItem(item);
  // };
  componentDidMount() {
    console.log(this.props)
    this.props.fetchBook(this.props.match.params.id);
  }

  render() {
    return (
      <BookView
        user={this.props.user}
        book={this.props.book}
        //handleSubmit={this.handleSubmit}
      />
    );
  }
}

// map state to props
const mapState = (state) => {
  return {
    // user:state.user,
    book: state.book,
  };
};

const mapDispatch = (dispatch,ownProps) => {
  return {
    fetchBook: (id) => dispatch(fetchBookThunk(id)),
    //addItem:(Item)=>dispatch(addItemThunk(Item,ownProps)),
  };
};

export default connect(mapState, mapDispatch)(BookContainer);