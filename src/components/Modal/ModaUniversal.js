import css from './Modal.module.scss';
import { createPortal } from 'react-dom';
import { IoReturnDownBackSharp } from 'react-icons/io5';
// import Modal from 'react-animated-modal';

const modalRoot = document.querySelector('#modal-root');

const ModalUniversal = prop => {
  return createPortal(
    <div className={css.Modal__backdrop} onClick={prop.onClick} type="flipInX">
      <div className={css.Modal__content}>
        <div className={css.topbox}>
          <button className={css.btnCloseMob} onClick={prop.onClose}>
            <IoReturnDownBackSharp />
          </button>
        </div>
        {prop.children}
      </div>
    </div>,
    modalRoot
  );
};

export default ModalUniversal;
