import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './AvailableMeals.module.css';
import MealItem from './MealItem';

const AvailableMeals = () => {
  const initialMeals = useSelector((state) => state.meals.meals);
  const meals = initialMeals.map((meal) => (
    <Fragment key={meal.id}>
      <MealItem meal={meal} />
      <hr />
    </Fragment>
  ));
  return (
    <section className={classes['available-meals']}>
      <Card>
        <ul>{meals}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
