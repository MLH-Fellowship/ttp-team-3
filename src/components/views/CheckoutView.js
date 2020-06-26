import React from "react";
import { Link } from "react-router-dom";

const CheckoutView = (props) => {
  return (
    <div className="col-md-8 order-md-1">
    <h4>Billing address</h4>
    <form>
        <div className="row">
            <div className="col-md-6">
              <label htmlFor="firstName">First name</label>
              <input type="text" className="form-control" id="firstName" placeholder="Enter your first name" required="required"/>
            </div>
            <div className="col-md-6">
              <label htmlFor="lastName">Last name</label>
              <input type="text" className="form-control" id="lastName" placeholder="Enter your last name" required="required"/>
            </div>
        </div>
        <div className="mb-3">
            <label htmlFor="username">Username</label>
            <div className="input-group">
              <input type="text" className="form-control" id="username" placeholder="Enter your username" required="required"/>
            </div>
        </div>
        <div>
            <label htmlFor="email">Email</label>
            <input type="email" className="form-control" id="email" placeholder="12345@email.com"/>
        </div>
        <div>
            <label htmlFor="address">Address</label>
            <input type="text" className="form-control" id="address" placeholder="2800 Victory Blvd" required="required" />

        </div>
        <div className="row">
            <div className="col-md-5">
              <label htmlFor="country">Country</label>
              <select className="custom-select d-block w-100" name="country" id="country">
                <option>Choose...</option>
                <option value="United States">United States</option>
              </select>

            </div>
            <div className="col-md-4">
              <label htmlFor="state">State</label>
              <select className="custom-select d-block w-100" id="state">
                <option>.....</option>
                <option value="New York">New York</option>
              </select>
            </div>
            <div className="col-md-3">
              <label htmlFor="zip">Zip</label>
              <input type="text" className="form-control" id="zip" placeholder="10314" required="required" />
            </div>
        </div>
        <hr className="mb-4" />
          <div className="custom-control custom-checkbox">
            <input type="checkbox" className="custom-control-input" id="same-address" />
            <label className="custom-control-label" htmlFor="same-address">Shipping address is the same as my billing address</label>
          </div>
        <hr className="mb-4" />
        <h4>Payment</h4>
        <div className="d-block my-3">
            <div className="custom-control custom-radio">
              <input id="credit" name="paymentMethod" type="radio" className="custom-control-input" required="required" />
              <label className="custom-control-label" htmlFor="credit">Credit card</label>
            </div>

            <div className="custom-control custom-radio">
              <input id="debit" name="paymentMethod" type="radio" className="custom-control-input" required="required" />
              <label className="custom-control-label" htmlFor="debit">Debit card</label>
            </div>
        </div>
        <div className="row">
            <div className="col-md-6">
              <label htmlFor="cc-name">Name on card</label>
              <input type="text" className="form-control" id="cc-name" placeholder="Name on card" required="required"/>
            </div>

            <div className="col-md-6">
              <label htmlFor="cc-number">Credit card number</label>
              <input type="text" className="form-control" id="cc-number" placeholder="1234 5678 1234 5678" required="required"/>
            </div>
        </div>
        <div className="row">
            <div className="col-md-3">
              <label htmlFor="cc-expiration">Expiration</label>
              <input type="text" className="form-control" id="cc-expiration" placeholder="04/2019" required="required"/>
            </div>

            <div className="col-md-3">
              <label htmlFor="cc-cvv">CVV</label>
              <input type="text" className="form-control" id="cc-cvv" placeholder="123" required="required"/>
            </div>
          </div>
          <hr className="mb-4"/>
          <Link to="/cart">
          <button className="btn btn-outline-success btn-lg btn-block" type="submit">Back to Cart</button>
          </Link>
          <br/>
          <button className="btn btn-outline-primary btn-lg btn-block" type="submit">Place your order</button>

    </form>
    </div>
  );
};


export default CheckoutView;
