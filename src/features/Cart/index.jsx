import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { cartTotal } from './cartSlice';

const Cart = (props) => {
  const totalCart = useSelector(cartTotal);
  return <div>Cart page {totalCart}</div>;
};

Cart.propTypes = {};

export default Cart;
