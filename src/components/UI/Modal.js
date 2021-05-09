import classes from './Modal.module.css';
import { Fragment } from 'react';
import { createPortal } from 'react-dom';
import { useSelector } from 'react-redux';
import Backdrop from './Backdrop';

const ModalOverlay = (props) => {
  return <div className={classes.modal}>{props.children}</div>;
};

const Modal = (props) => {
  const showModal = useSelector((state) => state.ui.showModal);
  return (
    <Fragment>
      {showModal &&
        createPortal(<Backdrop />, document.getElementById('overlays'))}
      {showModal &&
        createPortal(
          <ModalOverlay>{props.children}</ModalOverlay>,
          document.getElementById('overlays')
        )}
    </Fragment>
  );
};

export default Modal;
