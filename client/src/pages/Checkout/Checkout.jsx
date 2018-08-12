import React, { Component } from "react";
import "./Checkout.css";
import Modal from "react-modal";
import BuySomething from "../../ui/BuySomething/BuySomething";

import { connect } from 'react-redux';

const customStyles = {
  content: {
    backgroundColor: "#fff",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

class Checkout extends Component {
  state = {
    name: "you",
    email: "",
    country: "",
    modalIsOpen: false
  };

  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  openModal = e => {
    e.preventDefault();
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  render() {

    if (!this.props.cart.length)
      return <BuySomething message="Cart is empty to checkout!" />

    return (
      <div className="Checkout-Wrapper">
        <h1 className="Checkout-Title">Checkout</h1>
        <form className="Checkout-Form">
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={this.onChangeHandler}
            className="Checkout-Input"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={this.onChangeHandler}
            className="Checkout-Input"
          />
          <input
            type="text"
            name="country"
            placeholder="Country"
            onChange={this.onChangeHandler}
            className="Checkout-Input"
          />
          <button
            className="product-button Checkout-Button"
            onClick={this.openModal}
          >
            Place order
          </button>
        </form>

        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Thanks"
          ariaHideApp={false}
        >
          <i className="fa fa-times Close-Modal" onClick={this.closeModal}></i>
          <p style={{ color: "#000", padding: '20px' }}>
            Thanks <strong>{this.state.name}</strong> for testing my simple Online Shopping Cart!
          </p>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart
})

export default connect(mapStateToProps, null)(Checkout);
