import classes from './CartItem.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { Fragment } from 'react';
import { cartActions } from '../../store/cart';

const CartItem = () => {
  const cartState = useSelector((state) => ({
    items: state.cart.items,
    totalAmount: state.cart.totalAmount,
  }));
  const dispatch = useDispatch();

  const addToCartHandler = (cartItem) => {
    const updatedCartItem = { ...cartItem, increment: 1 };
    dispatch(cartActions.addItemToCart(updatedCartItem));
  };

  const removeFromCartHandler = (id) => {
    dispatch(cartActions.removeItemFromCart(id));
  };
  return (
    <div className={classes['cart-item']}>
      <ul>
        {cartState.items.map((cartItem) => {
          return (
            <Fragment key={cartItem.id}>
              <li>
                <div className={classes.container}>
                  <div className={classes['cart-item-name']}>
                    {cartItem.name}
                  </div>
                  <span className={classes['cart-item-price']}>
                    <span>&#8377;</span>
                    {cartItem.price.toFixed(2)}
                    <span className={classes['cart-item-amount']}>
                      x {cartItem.amount}
                    </span>
                  </span>
                </div>
                <div className={classes.actions}>
                  <button onClick={() => removeFromCartHandler(cartItem.id)}>
                    -
                  </button>
                  <button onClick={() => addToCartHandler(cartItem)}>+</button>
                </div>
              </li>
              <hr />
            </Fragment>
          );
        })}
      </ul>
      <p>
        Total Amount: <span>&#8377;</span>
        {cartState.totalAmount.toFixed(2)}
      </p>
    </div>
  );
};

export default CartItem;
