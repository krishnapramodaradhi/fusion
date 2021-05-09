import { useRef } from 'react';
import classes from './MealItemForm.module.css';

const MealItemForm = (props) => {
  const amountRef = useRef();
  const mealItemFormSubmitHandler = (event) => {
    event.preventDefault();
    props.onAmountSubmit(amountRef.current.value);
  };
  return (
    <form
      className={classes['meal-item-form']}
      onSubmit={mealItemFormSubmitHandler}
    >
      <div className={classes.control}>
        <label>Amount</label>
        <input type="number" defaultValue="1" min="1" max="5" ref={amountRef} />
      </div>
      <div className={classes.actions}>
        <button>+ Add</button>
      </div>
    </form>
  );
};

export default MealItemForm;
