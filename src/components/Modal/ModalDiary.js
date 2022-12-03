import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggle } from 'redux/products/products-slice';
import ModalUniversal from './ModaUniversal';
import { useState } from 'react';

import { addDay, fetchProduct } from 'redux/products/products-operations';
import {
  selectDateCalendar,
  selectProduct,
} from 'redux/products/products-selectors';

import scss from './ModalDiary.module.scss';

export default function ModalDiary() {
  const dispatch = useDispatch();
  const onClose = useCallback(() => {
    dispatch(toggle(false));
  }, [dispatch]);

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
    onClose();
  };

  return (
    <ModalUniversal onClose={onClose}>
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
          <button className={scss.btnOrange} type="submit">
            Add
          </button>
        </form>
      </div>
    </ModalUniversal>
  );
}
