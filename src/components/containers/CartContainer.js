import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchAllItemsThunk, deleteItemThunk,fetchUserThunk } from "../../thunks";
import { Link } from "react-router-dom";

// Smart container;
class CartContainer extends Component {
  componentDidMount() {
    this.props.fetchAllItems();
    if(this.props.user.id){
        this.props.fetchUser(this.props.user.id);
    }
  }
  componentDidUpdate(){
    this.props.fetchAllItems();
    if(this.props.user.id){
        this.props.fetchUser(this.props.user.id);
    }
  }

  render() {
    if(!this.props.user.id){
      return <div>
        <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
          <h2 className="display-4">You Haven't Logged in Yet</h2>
        </div>
        <button className="btn btn-outline-primary"><Link to="/login">Login</Link></button>
        </div>
    }
    else{
        let totalprice=0
        {this.props.allItems
            .filter((i) => i.userId === this.props.user.id)
            .map(item => (totalprice+=parseFloat(item.price))

            )}
    return (
      <div>
        <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
          <h2 className="display-4">Cart</h2>
        </div>
        <div className="container">
          <table id="cart" className="table table-hover table-condensed">
                    <thead>
                    <tr>
                      <th >Product</th>
                      <th >Price</th>
                      <th >Quantity</th>
                      <th className="text-center">Subtotal</th>
                    </tr>
                  </thead>
                  <tbody>
                  {this.props.user.books
                    .map(item => (
                    <tr key={item.id}>                
                      <td data-th="Product" >
                        <div className="row">
                          <div className="col-sm-2"><img src={item.imageUrl} alt="product" className="small-picture"/></div>
                          <div className="col-sm-10">
                            <h4><Link to={`/books/${item.id}`}>{item.title}</Link></h4>
                          </div>
                        </div>
                      </td>
                      <td data-th="Price">${item.price}</td>
                    
                      <td data-th="Quantity">
                          1
                      </td>
                      <td data-th="Subtotal" className="text-center" id="subtotal" >${item.price}</td>    
                        <td><button className="btn btn-outline-danger"  onClick={() => this.props.deleteItem(item.id)}>Remove</button></td>
                    </tr>
                    ))
                  }
                  </tbody>
                  <tfoot>
                    <tr>
                      <td><Link to="/books"  className="btn btn-outline-warning">Continue Shopping</Link></td>
                      <td colSpan="2"></td>
                      <td className="text-center"><strong>Total Price: ${(totalprice).toFixed(2)}</strong></td>
                      {/* <td><LinkTo @route='checkout' className="btn btn-outline-success">Checkout</LinkTo></td> */}
                    </tr>
                  </tfoot>
                </table>
        </div>
    </div>
    );
    }
  }
}
// Map state to props;
const mapState = (state) => {
  return {
    user:state.user,
    allItems: state.allItems,
  };
};

// Map dispatch to props;
const mapDispatch = (dispatch) => {
  return {
    fetchUser: (id) => dispatch(fetchUserThunk(id)),
    fetchAllItems: () => dispatch(fetchAllItemsThunk()),
    deleteItem: (id) => dispatch(deleteItemThunk(id)),
  };
};

// Type check props;
CartContainer.propTypes = {
  allItems: PropTypes.array.isRequired,
  fetchAllItems: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
};

// Export our store-connected container by default;
export default connect(mapState, mapDispatch)(CartContainer);