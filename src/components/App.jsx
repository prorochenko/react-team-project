import { Route, Routes, Navigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
import { lazy } from 'react';

import { Layout } from './Layout';
const Login = lazy(() => import('../pages/Login'));
const Register = lazy(() => import('../pages/Register'));
const Diary = lazy(() => import('../pages/Diary'));
const Calculator = lazy(() => import('../pages/Calculator'));

export const App = () => {
  //Щоб не виходило при перезавантаженні.
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchCurrentUser());
  // }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/calculator" />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="calculator" element={<Calculator />} />
          <Route path="diary" element={<Diary />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
