import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import mealsImage from '../../assets/meals.jpg';
import { logout } from '../../store/login';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = () => {
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <Fragment>
      <header className={classes.header}>
        <Link to="/">Fusion</Link>
        {!!isLoggedIn && <HeaderCartButton />}
        {!!isLoggedIn && (
          <button onClick={logoutHandler} className={classes.logout}>
            Logout
          </button>
        )}
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="meals.jpg" />
      </div>
    </Fragment>
  );
};

export default Header;
