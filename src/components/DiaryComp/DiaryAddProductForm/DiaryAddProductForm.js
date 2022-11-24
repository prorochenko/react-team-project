import { Field, Form, Formik } from 'formik';

import { FiPlus } from 'react-icons/fi';

import scss from './DiaryAddProductForm.module.scss';

export default function DiaryAddProductForm() {
  return (
    <Formik className={scss.form}>
      <Form className={scss.formProduct}>
        <label className={scss.formLabel}>
          <Field
            className={scss.formInput}
            type="text"
            placeholder="Enter product name"
          />
        </label>

        <label className={scss.formLabel}>
          <Field
            className={scss.formInput + ' ' + scss.formInput__gram}
            type="text"
            placeholder="Grams"
          />
        </label>
        <button className={scss.formButton} type="submit">
          <FiPlus className={scss.icon} />
        </button>
      </Form>
    </Formik>
  );
}
