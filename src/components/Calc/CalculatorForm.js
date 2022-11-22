import scss from './CalculatorForm.module.scss';
import { Formik, Form, Field } from 'formik';

const initialValues = {
  height: '',
  age: '',
  currentWeight: '',
  desiredWeight: '',
  bloodType: null,
};

const CalculatorForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };
  return (
    <div>
      <h2>Calculate your daily calorie intake right now</h2>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={scss.calculatorForm}>
          <label>
            <Field
              className={scss.calculatorFormInput}
              type="text"
              placeholder="Height *"
              name="height"
            ></Field>
          </label>
          <label>
            <Field
              className={scss.calculatorFormInput}
              type="text"
              placeholder="Age *"
              name="age"
            ></Field>
          </label>
          <label>
            <Field
              className={scss.calculatorFormInput}
              type="text"
              placeholder="Current weight *"
              name="currentWeight"
            ></Field>
          </label>
          <label>
            <Field
              className={scss.calculatorFormInput}
              type="text"
              placeholder="Desired weight *"
              name="desiredWeight"
            ></Field>
          </label>
          <label>
            <Field type="radio" name="bloodType" value="1"></Field>
            <span>1</span>

            <Field type="radio" name="bloodType" value="2"></Field>
            <span>2</span>

            <Field type="radio" name="bloodType" value="3"></Field>
            <span>3</span>

            <Field type="radio" name="bloodType" value="4"></Field>
            <span>4</span>
          </label>
          <button type="submit" className={scss.btnOrange}>
            Start losing weight
          </button>
        </Form>
      </Formik>
    </div>
  );
};
export default CalculatorForm;
