import React from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';

interface IModalProps {
  onClose: () => void;
}

interface IBackdropProps extends IModalProps {}

const Backdrop: React.FC<IBackdropProps> = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};

const ModalOverlay: React.FC = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById('overlays');

const Modal: React.FC<IModalProps> = (props) => {
  return (
    <React.Fragment>
      {portalElement &&
        ReactDOM.createPortal(
          <Backdrop onClose={props.onClose} />,
          portalElement
        )}
      {portalElement &&
        ReactDOM.createPortal(
          <ModalOverlay>{props.children}</ModalOverlay>,
          portalElement
        )}
    </React.Fragment>
  );
};

export default Modal;
