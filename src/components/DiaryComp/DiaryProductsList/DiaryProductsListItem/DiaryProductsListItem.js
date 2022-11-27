import { FiX } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';

import { deleteProductDay } from 'redux/products/products-operations';
import { selectDayInfo } from 'redux/products/products-selectors';
import scss from './DiaryProductsListItem.module.scss';

export const DiaryProductsListItem = ({ product }) => {
  const dispatch = useDispatch();
  const dayId = useSelector(selectDayInfo);
  const eatenProductId = product.id;
  const handleDelete = () => {
    console.log(dayId, eatenProductId);
    dispatch(deleteProductDay({ dayId, eatenProductId }));
  };

  return (
    <li className={scss.productsListItem}>
      <div className={scss.productsName}>{product.title}</div>
      <div className={scss.productsGramm}>{product.weight}</div>
      <div className={scss.productsKcal}>
        {Math.round(product.kcal)}
        <span className={scss.productsKcal__text}>kcal</span>
      </div>
      <button className={scss.productsBtn} type="button" onClick={handleDelete}>
        <FiX className={scss.productsIcon} />
      </button>
    </li>
  );
};
