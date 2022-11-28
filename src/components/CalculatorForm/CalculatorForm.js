import scss from './CalculatorForm.module.scss';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import { createParamsRegisterUser } from 'redux/auth/authSlice';
import {
  selectUserId,
  selectIsLoggedIn,
  selectParamsRegisterUser,
  selectIsRegister,
} from 'redux/auth/selectors';
import {
  fetchCalculatorInfoNotId,
  fetchCalculatorInfoById,
} from 'redux/auth/operations';
import { useEffect } from 'react';

const schema = yup.object().shape({
  height: yup.number().min(100).max(250).required(),
  age: yup.number().min(18).max(100).required(),
  weight: yup.number().min(20).max(500).required(),
  desiredWeight: yup.number().min(20).max(500).required(),
});

const initialValues = {
  height: '',
  age: '',
  weight: '',
  desiredWeight: '',
  bloodType: null,
};

const CalculatorForm = () => {
  const userId = useSelector(selectUserId);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const paramsRegisterUser = useSelector(selectParamsRegisterUser);
  const isRegister = useSelector(selectIsRegister);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoggedIn && paramsRegisterUser && isRegister) {
      dispatch(fetchCalculatorInfoById({ ...paramsRegisterUser, userId }));
    }
  }, [isLoggedIn, paramsRegisterUser, dispatch, userId, isRegister]);

  const handleSubmit = (values, { resetForm }) => {
    if (userId === null) {
      dispatch(createParamsRegisterUser(values));
      dispatch(fetchCalculatorInfoNotId({ ...values }));
    } else {
      dispatch(fetchCalculatorInfoById({ ...values, userId }));
    }
    resetForm();
  };

  return (
    <div className={scss.calculatorFormContainer}>
      <h2 className={scss.calculatorFormTitle}>
        Calculate your daily calorie intake right now
      </h2>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <Form className={scss.calculatorForm}>
          <span className={scss.calculatorFormInputContainer}>
            <label>
              <Field
                className={scss.calculatorFormInput}
                type="text"
                placeholder="Height *"
                name="height"
              ></Field>
              <ErrorMessage
                className={scss.errorMessage}
                name="height"
                component="div"
              ></ErrorMessage>
            </label>
            <label>
              <Field
                className={scss.calculatorFormInput}
                type="text"
                placeholder="Age *"
                name="age"
              ></Field>
              <ErrorMessage
                className={scss.errorMessage}
                name="age"
                component="div"
              ></ErrorMessage>
            </label>
            <label>
              <Field
                className={scss.calculatorFormInput}
                type="text"
                placeholder="Current weight *"
                name="weight"
              ></Field>
              <ErrorMessage
                className={scss.errorMessage}
                name="weight"
                component="div"
              ></ErrorMessage>
            </label>
            <label>
              <Field
                className={scss.calculatorFormInput}
                type="text"
                placeholder="Desired weight *"
                name="desiredWeight"
              ></Field>
              <ErrorMessage
                className={scss.errorMessage}
                name="desiredWeight"
                component="div"
              ></ErrorMessage>
            </label>
            <div>
              <span className={scss.calculatorFormRadioText}>Blood type *</span>
              <div className={scss.calculatorFormRadioBox}>
                <div className={scss.calculatorFormRadioInputBox}>
                  <Field
                    className={scss.calculatorFormRadioInput}
                    type="radio"
                    name="bloodType"
                    value="1"
                  ></Field>
                  <span className={scss.calculatorFormRadioText}>1</span>
                </div>
                <div className={scss.calculatorFormRadioInputBox}>
                  <Field
                    className={scss.calculatorFormRadioInput}
                    type="radio"
                    name="bloodType"
                    value="2"
                  ></Field>
                  <span className={scss.calculatorFormRadioText}>2</span>
                </div>
                <div className={scss.calculatorFormRadioInputBox}>
                  <Field
                    className={scss.calculatorFormRadioInput}
                    type="radio"
                    name="bloodType"
                    value="3"
                  ></Field>
                  <span className={scss.calculatorFormRadioText}>3</span>
                </div>
                <div className={scss.calculatorFormRadioInputBox}>
                  <Field
                    className={scss.calculatorFormRadioInput}
                    type="radio"
                    name="bloodType"
                    value="4"
                  ></Field>
                  <span className={scss.calculatorFormRadioText}>4</span>
                </div>
              </div>
            </div>
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
