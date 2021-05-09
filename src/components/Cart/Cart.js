import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../store/ui';
import CartItem from './CartItem';

const Cart = () => {
  const cartState = useSelector((state) => ({
    items: state.cart.items,
  }));
  const dispatch = useDispatch();
  return (
    <Modal>
      <CartItem />
      <div className={classes.actions}>
        <button
          onClick={() => dispatch(uiActions.toggleModal())}
          className={classes.cancel}
        >
          Cancel
        </button>
        {!!cartState.items.length && <button>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
