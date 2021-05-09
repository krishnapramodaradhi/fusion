import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../store/ui';
import CartIcon from '../Cart/CartIcon';
import './HeaderCartButton.module.css';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const cartQuantity = cartItems.reduce((currValue, item) => {
    return currValue + item.amount;
  }, 0);

  const cartModalHandler = () => {
    dispatch(uiActions.toggleModal());
  };
  return (
    <button className={classes.button} onClick={cartModalHandler}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default HeaderCartButton;
