import css from './Modal.module.scss';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { IoReturnDownBackSharp } from 'react-icons/io5';
// import { getProducts } from 'ourAPI';
import { useDispatch } from 'react-redux';
import { toggle } from 'redux/store';

const modalRoot = document.querySelector('#modal-root');

const Modal = () => {
  const dispatch = useDispatch();

  // let [modal, setModal] = useState(true);
  // const [products, serProducts] = useState([]);
  // useEffect(() => getProducts().then(setProducts));

  const onClose = () => {
    dispatch(toggle(false));
  };

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', escKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', escKeyDown);
      document.body.style.overflow = 'unset';
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
            2800 <span className={css.smallText}>ккал</span>
          </p>
          <div className={css.box}>
            <h2 className={css.subtitle}>Foods you should not eat</h2>
            <ol className={css.list}>
              {/* {products.map(product => (
                <li>{product.name}</li>
              ))} ++ сделать проверку, что когда данные есть, то тогда рендерить */}
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
              <li className={css.item}></li> <li className={css.item}></li>
              <li className={css.item}></li>
              <li className={css.item}></li>
              <li className={css.item}></li> <li className={css.item}></li>
              <li className={css.item}></li>
              <li className={css.item}></li> <li className={css.item}></li>
              <li className={css.item}></li> <li className={css.item}></li>
              <li className={css.item}></li>
              <li className={css.item}></li>
              <li className={css.item}></li> <li className={css.item}></li>
              <li className={css.item}></li>
              <li className={css.item}></li> <li className={css.item}></li>
              <li className={css.item}></li> <li className={css.item}></li>
              <li className={css.item}></li>
              <li className={css.item}></li>
              <li className={css.item}></li> <li className={css.item}></li>
              <li className={css.item}></li>
              <li className={css.item}></li> <li className={css.item}></li>
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
