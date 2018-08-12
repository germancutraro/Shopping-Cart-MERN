import React from "react";
import "./Products.css";
import PropTypes from 'prop-types';
import Product from "../Product/Product";
import { connect } from "react-redux";

// Actions
import { addToCart } from "../../store/actions/cart";

const Products = props => {
  const productList = props.products.map( (product, i) => (
    <Product
      key={product._id}
      {...product}
      addToCart={() => props.addToCart(product, i)}
    />
  ));
  return <div className="Products-Container">
    <div className="Products-Wrapper">
      {productList}
    </div>
  </div>;
};

Products.propTypes = {
  products: PropTypes.array.isRequired,
  addToCart: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  cart: state.cart
});

export default connect(
  mapStateToProps,
  { addToCart }
)(Products);
