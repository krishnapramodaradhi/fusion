import { Fragment } from 'react';
import Cart from '../components/Cart/Cart';
import Meals from '../components/Meals/Meals';

const User = () => {
  return (
    <Fragment>
      <Cart />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
};

export default User;
