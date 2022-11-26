import { useSelector } from 'react-redux';
import { DiaryProductsListItem } from './DiaryProductsListItem/DiaryProductsListItem';
import scss from './DiaryProductsList.module.scss';
import { selectEaten } from 'redux/products/products-selectors';

export default function DiaryProductsList() {
  const products = useSelector(selectEaten);
  return (
    <>
      <div className={scss.box}>
        <ul className={scss.productsList}>
          {products.length > 0 &&
            products.map(product => (
              <DiaryProductsListItem product={product} />
            ))}
        </ul>
      </div>
    </>
  );
}

// const products = useSelector(getProducts);
