import React, { Fragment } from "react";
import "./CartItem.css";
import PropTypes from "prop-types";

const CartItem = props => {
  return (
    <Fragment>
      <tr>
        <td>
          {" "}
          <img
            src={props.photo}
            alt={props.name}
            className="Cart-Item-Photo"
          />{" "}
        </td>
        <td>{props.name}</td>
        <td>
          <button onClick={props.removeItem} className="Quantity-Button">
            -
          </button>
          <span className="Cart-Item-Quantity">{props.quantity}</span>
          <button onClick={props.addItem} className="Quantity-Button">
            +
          </button>

        </td>
        <td>${props.price}</td>
        <td><i className="fa fa-times" onClick={props.removeWholeItem} style={{ color: 'red', cursor: 'pointer' }}></i></td>
      </tr>

    </Fragment>
  );
};

CartItem.propTypes = {
  name: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  addItem: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
}

export default CartItem;
