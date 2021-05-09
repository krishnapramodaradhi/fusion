import { useDispatch } from 'react-redux';
import { uiActions } from '../../store/ui';
import classes from './Backdrop.module.css';

const Backdrop = () => {
  const dispatch = useDispatch();
  const closeModalHandler = () => {
    dispatch(uiActions.toggleModal());
  };
  return <div className={classes.backdrop} onClick={closeModalHandler} />;
};

export default Backdrop;
