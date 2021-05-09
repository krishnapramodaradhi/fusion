import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart';
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';

const MealItem = (props) => {
  const dispatch = useDispatch();
  const { name, description, price, id } = props.meal;

  const amountHandler = (amount) => {
    const cartItem = {
      id,
      name,
      price,
      amount: +amount,
    };
    dispatch(cartActions.addItemToCart(cartItem));
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>
          <span>&#8377;</span>
          {price}
        </div>
      </div>
      <MealItemForm onAmountSubmit={amountHandler} />
    </li>
  );
};

export default MealItem;
