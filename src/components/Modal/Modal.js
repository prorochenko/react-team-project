import css from './Modal.module.scss';
import { createPortal } from 'react-dom';
import { useEffect, useState } from 'react';

const modalRoot = document.querySelector('#modal-root');

const Modal = () => {
  let [modal, setModal] = useState(true);

  const onClose = () => {
    setModal(false);
  };

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', escKeyDown);
    return () => {
      document.removeEventListener('keydown', escKeyDown);
    };
  });

  const escKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  return createPortal(
    <div className={css.Modal__backdrop} onClick={handleBackdropClick}>
      <div className={css.Modal__content}>
        <h1>hey</h1>
        <button type="button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
