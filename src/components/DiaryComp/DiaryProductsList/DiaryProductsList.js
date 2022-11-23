import { useSelector } from 'react-redux';
import { DiaryProductsListItem } from './DiaryProductsListItem/DiaryProductsListItem';
import scss from './DiaryProductsList.module.scss';

export default function DiaryProductsList() {
  return (
    <div className={scss.box}>
      <ul className={scss.productsList}>
        <DiaryProductsListItem />
      </ul>
    </div>
  );
}

// const products = useSelector(getProducts);

//   return (
//     <div>
//       {products.length > 0 && (
//         <ul>
//           {products.map(product => (
//             <DiaryProductsListItem contact={product} />
//           ))}
//         </ul>
//       )}
//     </div>
