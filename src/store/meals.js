import { createSlice } from '@reduxjs/toolkit';
import { uiActions } from './ui';

const initialState = {
  meals: [],
};

const mealsSlice = createSlice({
  name: 'meals',
  initialState,
  reducers: {
    initialMeals(state, action) {
      state.meals = action.payload;
    },
  },
});

export const fetchMeals = () => {
  return async (dispatch) => {
    dispatch(uiActions.toggleIsLoading());
    const response = await fetch(
      'https://order-meals-a215d-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json'
    );
    const data = await response.json();
    const mealData = Object.keys(data).map((key) => {
      return {
        id: key,
        name: data[key].name,
        description: data[key].description,
        price: data[key].price,
      };
    });
    dispatch(mealsActions.initialMeals(mealData));
    dispatch(uiActions.toggleIsLoading());
  };
};

export const mealsActions = mealsSlice.actions;

export default mealsSlice.reducer;
