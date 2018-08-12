import React, { Component } from "react";
import "./Cart.css";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { addToCart, removeFromCart, removeWholeItem } from "../../store/actions/cart";
// Components
import CartItem from "../../components/CartItem/CartItem";
import BuySomething from "../../ui/BuySomething/BuySomething";

const sort = items => {
  return items.sort((a, b) => a._id < b._id);
};

const totalPrice = cart => {
  return cart.reduce(
    (accum, product) => accum + product.price * product.quantity,
    0
  );
};

class Cart extends Component {
  render() {
    const cartItems = sort(this.props.cart).map((product, i) => (
      <CartItem
        key={i}
        {...product}
        addItem={() => this.props.addToCart(product)}
        removeItem={() => this.props.removeFromCart(product)}
        removeWholeItem={() => this.props.removeWholeItem(product)}
      />
    ));

    if (!cartItems.length)
      return <BuySomething />

    return (
      <div>
        <h1 className="My-Cart-Title">My Cart:</h1>
        <div className="Cart-Products-Wrapper">
          <table className="Cart-Table">
            <thead>
              <tr>
                <th>Photo</th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Price / Unit</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cartItems}
              <tr>
                <td
                  style={{
                    verticalAlign: 0,
                    paddingTop: "1rem",
                    fontWeight: "bold"
                  }}
                >
                  Total
                </td>
                <td />
                <td />
                <td>
                  <p className="Total-Price">${totalPrice(this.props.cart)}</p>
                  <Link to="/checkout" className="Checkout-Button-Text">
                    <div className="Checkout-Button">Checkout</div>
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

Cart.propTypes = {
  addToCart: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  cart: state.cart
});

export default connect(
  mapStateToProps,
  { addToCart, removeFromCart, removeWholeItem }
)(Cart);
