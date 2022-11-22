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
    <div className={scss.calculatorFormContainer}>
      <h2 className={scss.calculatorFormTitle}>
        Calculate your daily calorie intake right now
      </h2>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={scss.calculatorForm}>
          <span className={scss.calculatorFormInputContainer}>
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
              <span className={scss.calculatorFormRadioText}>Blood type *</span>
              <div className={scss.calculatorFormRadioBox}>
                <div className={scss.calculatorFormRadioInputBox}>
                  <Field
                    className={scss.calculatorFormRadioInput}
                    type="radio"
                    name="bloodType"
                    value="1"
                  ></Field>
                  <span>1</span>
                </div>
                <div className={scss.calculatorFormRadioInputBox}>
                  <Field
                    className={scss.calculatorFormRadioInput}
                    type="radio"
                    name="bloodType"
                    value="2"
                  ></Field>
                  <span>2</span>
                </div>
                <div className={scss.calculatorFormRadioInputBox}>
                  <Field
                    className={scss.calculatorFormRadioInput}
                    type="radio"
                    name="bloodType"
                    value="3"
                  ></Field>
                  <span>3</span>
                </div>
                <div className={scss.calculatorFormRadioInputBox}>
                  <Field
                    className={scss.calculatorFormRadioInput}
                    type="radio"
                    name="bloodType"
                    value="4"
                  ></Field>
                  <span>4</span>
                </div>
              </div>
            </label>
          </span>

          <button type="submit" className={scss.btnOrange}>
            Start losing weight
          </button>
        </Form>
      </Formik>
    </div>
  );
};
export default CalculatorForm;
