import css from './Modal.module.scss';
import { createPortal } from 'react-dom';
import { useEffect, useCallback } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { IoReturnDownBackSharp } from 'react-icons/io5';
// import { getProducts } from 'ourAPI';
import { useDispatch } from 'react-redux';
import { toggle } from 'redux/auth/authSlice';
import {
  selectdailyRate,
  selectnotAllowerProducts,
} from 'redux/auth/selectors';
import { useSelector } from 'react-redux';

const modalRoot = document.querySelector('#modal-root');

const Modal = () => {
  const dailyRate = useSelector(selectdailyRate);
  console.log(dailyRate);
  const AllowerProducts = useSelector(selectnotAllowerProducts);

  console.log(AllowerProducts);

  const dispatch = useDispatch();
  const onClose = useCallback(() => {
    dispatch(toggle(false));
  }, [dispatch]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  const escKeyDown = useCallback(
    e => {
      if (e.code === 'Escape') {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener('keydown', escKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', escKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [escKeyDown]);

  return createPortal(
    <div className={css.Modal__backdrop} onClick={handleBackdropClick}>
      <div className={css.Modal__content}>
        <div className={css.topbox}>
          <button className={css.btnCloseMob} onClick={onClose}>
            <IoReturnDownBackSharp />
          </button>
        </div>
        <button className={css.btnClose} onClick={onClose}>
          <AiOutlineClose />
        </button>
        <div className={css.container}>
          <h1 className={css.title}>
            Your recommended daily calorie intake is
          </h1>
          <p className={css.number}>
            {dailyRate}
            <span className={css.smallText}>ккал</span>
          </p>
          <div className={css.box}>
            <h2 className={css.subtitle}>Foods you should not eat</h2>
            <ol className={css.list}>
              {AllowerProducts.map(product => (
                <li>{product}</li>
              ))}
              {/* ++ сделать проверку, что когда данные есть, то тогда рендерить  */}
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
