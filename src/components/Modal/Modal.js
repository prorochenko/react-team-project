import css from './Modal.module.scss';
import { useEffect, useCallback } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
// import { IoReturnDownBackSharp } from 'react-icons/io5';
// import { getProducts } from 'ourAPI';
import { useDispatch } from 'react-redux';
import { toggle } from 'redux/auth/authSlice';
import {
  selectdailyRate,
  selectNotAllowedProducts,
  selectIsLoggedIn,
} from 'redux/auth/selectors';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import ModalUniversal from './ModaUniversal';
// import { IoReturnDownBackSharp } from 'react-icons/io5';

const Modal = () => {
  const dailyRate = useSelector(selectdailyRate);
  const AllowerProducts = useSelector(selectNotAllowedProducts);
  const isLoggedIn = useSelector(selectIsLoggedIn);

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

  const button = (
    <button className={css.btn} type="button" onClick={onClose}>
      Start losing weight
    </button>
  );

  return (
    <ModalUniversal onClick={handleBackdropClick} onClose={onClose}>
      <div>
        {/* {isLoggedIn ? (
          <div className={css.topbox1}>
            <button className={css.btnCloseMob}>
              <IoReturnDownBackSharp />
            </button>
          </div>
        ) : (
          ''
        )} */}
        <button className={css.btnClose} onClick={onClose}>
          <AiOutlineClose size={24} />
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
                <li key={product}>{product}</li>
              ))}
              {/* ++ сделать проверку, что когда данные есть, то тогда рендерить  */}
            </ol>
          </div>
          {isLoggedIn ? (
            <NavLink to="/diary">{button} </NavLink>
          ) : (
            <NavLink to="/register">{button} </NavLink>
          )}
        </div>
      </div>
    </ModalUniversal>
  );
};

export default Modal;
