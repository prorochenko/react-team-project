// import { Field, Form, Formik } from 'formik';
import { useState } from 'react';

import { FiPlus } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from 'redux/products/products-operations';
import {
  selectProduct,
  selectProductId,
} from 'redux/products/products-selectors';

import scss from './DiaryAddProductForm.module.scss';

export default function DiaryAddProductForm() {
  const dispatch = useDispatch();
  const products = useSelector(selectProduct);

  const [product, setProduct] = useState('');
  const [grams, setGrams] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'product':
        dispatch(fetchProduct(value));
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
    const product = form.elements.product.value;
    const grams = form.elements.grams.value;

    console.log(product, grams);
    console.log(products);
    setProduct('');
    setGrams('');
  };

  return (
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
            list="pro"
          />
          {products && (
            <datalist id="pro">
              {products.map(product => (
                <option
                  key={product._id}
                  value={product.title.ru}
                  data-id={product._id}
                />
              ))}
            </datalist>
          )}
        </label>
        <label className={scss.formLabel}>
          <input
            className={scss.formInput + ' ' + scss.formInput__gram}
            type="text"
            name="grams"
            value={grams}
            onChange={handleChange}
            placeholder="Grams"
          />
        </label>
        <button className={scss.formButton} type="submit">
          <FiPlus className={scss.icon} />
        </button>
      </form>
    </div>
  );
}

// <Formik className={scss.form}>
//         <Form className={scss.formProduct} onSubmit={handleSubmit}>
//           <label className={scss.formLabel}>
// <Field
//   className={scss.formInput}
//   type="text"
//   name="product"
//   value={product}
//   onChange={handleChange}
//   placeholder="Enter product name"
// />
//           </label>

//           <label className={scss.formLabel}>
//             <Field
//               className={scss.formInput + ' ' + scss.formInput__gram}
//               type="text"
//               name="grams"
//               value={grams}
//               onChange={handleChange}
//               placeholder="Grams"
//             />
//           </label>
//           <button className={scss.formButton} type="submit">
//             <FiPlus className={scss.icon} />
//           </button>
//         </Form>
//       </Formik>
