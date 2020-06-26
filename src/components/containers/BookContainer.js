import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchBookThunk,addItemThunk
} from "../../thunks";

import { BookView } from "../views";
// import { user } from "../../reducers";

class BookContainer extends Component {

  handleSubmit = (e) => {
    let sBook=this.props.book
     let user=this.props.user
    if(!sBook.volumeInfo.imageLinks){
      sBook.imgUrl="https://via.placeholder.com/305x242?text=Placeholder"
    }
    else{
      sBook.imgUrl=sBook.volumeInfo.imageLinks.thumbnail
    }
    if(sBook.saleInfo.saleability==="NOT_FOR_SALE"){
      sBook.sale=false;
      sBook.price=null;
    }
    else{
      sBook.sale=true;
      sBook.price=sBook.saleInfo.listPrice.amount;
    }
    if(sBook.sale)
    {
    let item={
      uid:sBook.id,
      title:sBook.volumeInfo.title,
      imageUrl:sBook.imgUrl,
      price:sBook.price,
      userId:user.id,

    }
    e.preventDefault();
    this.props.addItem(item);
  }

  };
  componentDidMount() {
    
    this.props.fetchBook(this.props.match.params.id);
  }

  render() {
    return (
      <BookView
        user={this.props.user}
        book={this.props.book}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

// map state to props
const mapState = (state) => {
  return {
     user:state.user,
    book: state.book,
  };
};

const mapDispatch = (dispatch,ownProps) => {
  return {
    fetchBook: (id) => dispatch(fetchBookThunk(id)),
    addItem:(Item)=>dispatch(addItemThunk(Item,ownProps)),
  };
};

export default connect(mapState, mapDispatch)(BookContainer);