import css from './Modal.module.scss';
import { createPortal } from 'react-dom';
import { useEffect, useState } from 'react';
// import closeBtn from '../../assets/icons/symbol-def.svg#icon-Close';
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
        <button className={css.btnClose} onClick={onClose}>
          <svg className={css.buttonclose__icon} width="25" height="25">
            <use
              href="../../assets/icons/symbol-defs.svg#icon-ticket1"
              width="25px"
              height="25px"
            ></use>
          </svg>
        </button>
        {/* <svg>
          <path d="M24.653 2.795l-2.448-2.448-9.705 9.705-9.705-9.705-2.448 2.448 9.705 9.705-9.705 9.705 2.448 2.448 9.705-9.705 9.705 9.705 2.448-2.448-9.705-9.705 9.705-9.705z" />
        </svg> */}
        {/* <svg>
          <use href="../../assets/icons/symbol-defs.svg#icon-Close"></use>
        </svg> */}
        <div className={css.container}>
          <h1 className={css.title}>
            Your recommended daily calorie intake is
          </h1>
          <p className={css.number}>
            2800 <span className={css.smallText}>ккал</span>
          </p>
          <div className={css.box}>
            <h2 className={css.subtitle}>Foods you should not eat</h2>
            <ol className={css.list}>
              <li className={css.item}>Flour products</li>
              <li className={css.item}></li>
              <li className={css.item}></li>
              <li className={css.item}></li>
              <li className={css.item}></li>
              <li className={css.item}></li>
              <li className={css.item}></li>
              <li className={css.item}></li>
              <li className={css.item}></li>
              <li className={css.item}></li> <li className={css.item}></li>
              <li className={css.item}></li>
              <li className={css.item}></li> <li className={css.item}></li>
              <li className={css.item}></li>
              <li className={css.item}></li> <li className={css.item}></li>
              <li className={css.item}></li>
              <li className={css.item}></li> <li className={css.item}></li>
              <li className={css.item}></li>
              <li className={css.item}></li> <li className={css.item}></li>
              <li className={css.item}></li>
              <li className={css.item}></li> <li className={css.item}></li>
              <li className={css.item}></li>
              <li className={css.item}></li> <li className={css.item}></li>
              <li className={css.item}></li>
              <li className={css.item}></li> <li className={css.item}></li>
              <li className={css.item}></li>
              <li className={css.item}></li>
            </ol>
          </div>
          <button className={css.btn} type="button" onClick={onClose}>
            Start losing weight
          </button>
        </div>
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
