import { FiX } from 'react-icons/fi';
import scss from './DiaryProductsListItem.module.scss';

export const DiaryProductsListItem = ({ product }) => {
  return (
    <li className={scss.productsListItem} key={product.id}>
      <div className={scss.productsName}>{product.title}</div>
      <div className={scss.productsGramm}>{product.weight}</div>
      <div className={scss.productsKcal}>
        {product.kcal}
        <span className={scss.productsKcal__text}>kcal</span>
      </div>
      <button className={scss.productsBtn} type="button">
        <FiX className={scss.productsIcon} />
      </button>
    </li>
  );
};
