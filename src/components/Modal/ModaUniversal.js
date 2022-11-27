import css from './Modal.module.scss';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

const ModalUniversal = prop => {
  return createPortal(
    <div className={css.Modal__backdrop} onClick={prop.onClick}>
      <div className={css.Modal__content}>{prop.children}</div>
    </div>,
    modalRoot
  );
};

export default ModalUniversal;
