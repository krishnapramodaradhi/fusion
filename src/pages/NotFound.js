import classes from './NotFound.module.css';

const NotFound = () => {
  return (
    <div className={classes['not-found']}>
      <h1>404</h1>
      <h3>Page Not found!</h3>
    </div>
  );
};

export default NotFound;
