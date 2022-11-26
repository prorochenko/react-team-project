// import { Field, Form, Formik } from 'formik';
import { useState } from 'react';

import { FiPlus } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { addDay, fetchProduct } from 'redux/products/products-operations';
import {
  selectProduct,
  selectProductId,
} from 'redux/products/products-selectors';
import DiaryDateCalendar from '../DiaryDateCalendar/DiaryDateCalendar';
import moment from 'moment';
import scss from './DiaryAddProductForm.module.scss';

export default function DiaryAddProductForm() {
  const dispatch = useDispatch();
  const products = useSelector(selectProduct);

  const [product, setProduct] = useState('');
  const [grams, setGrams] = useState('');
  // const [date, setDate] = useState('');
  let date = null;
  const idProduct = () => {
    if (products) {
      return products[0]._id;
    }
  };
  // products[0]._id;
  const productId = idProduct();
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

    const weight = +form.elements.grams.value;
    // console.log(productId);
    // console.log(weight);
    // console.log(date);
    dispatch(addDay({ date, productId, weight }));
    setProduct('');
    setGrams('');
  };

  const getCalendarDate = newDate => {
    date = moment(newDate).format('yyyy-MM-DD');
  };

  return (
    <>
      <DiaryDateCalendar getCalendarDate={getCalendarDate} />
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
              list="proproduct"
            />
            {products && (
              <datalist id="product">
                {products.map(product => (
                  <option
                    key={product._id}
                    value={product.title.ru}
                    // data-id={product._id}
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
    </>
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
