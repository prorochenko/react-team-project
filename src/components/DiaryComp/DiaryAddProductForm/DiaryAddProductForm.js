import { useState } from 'react';

import { FiPlus } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { addDay, fetchProduct } from 'redux/products/products-operations';
import {
  selectDateCalendar,
  selectProduct,
} from 'redux/products/products-selectors';

import scss from './DiaryAddProductForm.module.scss';

export default function DiaryAddProductForm() {
  const dispatch = useDispatch();
  const products = useSelector(selectProduct);
  const date = useSelector(selectDateCalendar);

  const [product, setProduct] = useState('');
  const [grams, setGrams] = useState('');

  const idProduct = () => {
    if (products) {
      const index = products.findIndex(pro => pro.title.ru === product);
      if (index >= 0) {
        return products[index]._id;
      }
    }
  };
  //dfdfdf
  // const idProduct = () => {
  //   if (products) {
  //     return products[0]._id;
  //   }
  // };

  const productId = idProduct();
  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'product':
        if (value.length > 2) {
          dispatch(fetchProduct(value));
        }

        return setProduct(value);

      case 'grams':
        return setGrams(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.target;
    const weight = +form.elements.grams.value;

    dispatch(addDay({ date, productId, weight }));
    setProduct('');
    setGrams('');
  };

  // const getCalendarDate = newDate => {
  //   date = moment(newDate).format('yyyy-MM-DD');
  // };

  return (
    <>
      {/* <DiaryDateCalendar getCalendarDate={getCalendarDate} /> */}
      <div className={scss.form}>
        <form className={scss.formProduct} onSubmit={handleSubmit}>
          <label className={scss.formLabel}>
            <input
              className={scss.formInput}
              type="text"
              name="product"
              value={product}
              onChange={handleChange}
              placeholder="Enter product name"
              list="list"
              autoComplete="off"
              required
            />
            {products?.length > 0 && (
              <datalist id="list">
                {products.map(product => (
                  <option key={product._id} value={product.title.ru} />
                ))}
              </datalist>
            )}
          </label>
          <label className={scss.formLabel}>
            <input
              className={scss.formInput + ' ' + scss.formInput__gram}
              type="text"
              pattern="[0-9]+"
              name="grams"
              value={grams}
              onChange={handleChange}
              placeholder="Grams"
              required
              autoComplete="off"
            />
          </label>
          <button className={scss.formButton} type="submit">
            <FiPlus className={scss.icon} />
          </button>
        </form>
      </div>
    </>
  );
}
