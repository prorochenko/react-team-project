import { useSelector } from 'react-redux';
import { DiaryProductsListItem } from './DiaryProductsListItem/DiaryProductsListItem';
import scss from './DiaryProductsList.module.scss';
import { selectEaten } from 'redux/products/products-selectors';

export default function DiaryProductsList() {
  const products = useSelector(selectEaten);
  return (
    <div className={scss.box}>
      {products.length > 0 ? (
        <ul className={scss.productsList}>
          {products.map(product => (
            <DiaryProductsListItem product={product} key={product.id} />
          ))}
        </ul>
      ) : (
        <div>No product selected</div>
      )}
    </div>
  );
}
