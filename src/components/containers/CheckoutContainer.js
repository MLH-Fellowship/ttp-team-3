import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  fetchAllItemsThunk,
  deleteItemThunk,
  fetchUserThunk,
} from "../../thunks";
import { Link } from "react-router-dom";
import { CheckoutView } from "../views";
// Smart container;
class CheckoutContainer extends Component {
  componentDidMount() {
    this.props.fetchAllItems();
    if (this.props.user.id) {
      this.props.fetchUser(this.props.user.id);
    }
  }

  render() {
    if (!this.props.user.id) {
      return (
        <div>
          <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
            <h2 className="display-4">You Haven't Logged in Yet</h2>
          </div>
          <button className="btn btn-outline-primary">
            <Link to="/login">Login</Link>
          </button>
        </div>
      );
    } else {
      let totalprice = 0;
      {
        this.props.user.books.map(
          (item) => (totalprice += parseFloat(item.price))
        );
      }
      return (
        <div>
          <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
            <h2 className="display-4">Checkout</h2>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-4 order-md-2">
                <h4 className="d-flex justify-content-between">
                  Your cart
                  <span className="badge badge-secondary">
                    {this.props.user.books.length}
                  </span>
                </h4>
                <ul className="list-group">
                  {this.props.user.books.map((item) => (
                    <li
                      key={item.id}
                      className="list-group-item d-flex justify-content-between"
                    >
                      <img
                        src={item.imageUrl}
                        alt="product"
                        className="small-picture"
                      />
                      <div>
                        <h6>{item.title}</h6>
                        <p>x 1</p>
                      </div>
                      <strong>${item.price}</strong>
                    </li>
                  ))}
                  <li className="list-group-item d-flex justify-content-between">
                    <span>Total (USD)</span>
                    <strong>${(totalprice).toFixed(2)}</strong>
                  </li>
                </ul>
              </div>
              <CheckoutView />
            </div>
          </div>
        </div>
      );
    }
  }
}
// Map state to props;
const mapState = (state) => {
  return {
    user: state.user,
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
CheckoutContainer.propTypes = {
  allItems: PropTypes.array.isRequired,
  fetchAllItems: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
};

// Export our store-connected container by default;
export default connect(mapState, mapDispatch)(CheckoutContainer);
