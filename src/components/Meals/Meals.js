import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMeals } from '../../store/meals';
import Spinner from '../UI/Spinner';
import AvailableMeals from './AvailableMeals';
import MealsSummary from './MealsSummary';

const Meals = () => {
  const isLoading = useSelector((state) => state.ui.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMeals());
  }, [dispatch]);

  return (
    <Fragment>
      <MealsSummary />
      {!isLoading ? <AvailableMeals /> : <Spinner />}
    </Fragment>
  );
};

export default Meals;
