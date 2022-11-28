import { Route, Routes, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { lazy } from 'react';
import { selectIsRefreshing } from 'redux/auth/selectors';
import { fetchRefreshToken, fetchCurrentUser } from 'redux/auth/operations';
import { PrivateRoute } from './PrivateRoute.js';
import {
  PublicRoute,
  PublicRouteLogin,
  PublicRouteRegister,
} from './PublicRoute.js';
import BigLoader from './Loader/BigLoader';

import Modal from '../components/Modal/Modal';
import Layout from './Layout';
import ModalDiary from './Modal/ModalDiary.js';
import ModalMenu from './Modal/ModalMenu';

// const Layout = lazy(() => import('./Layout'));
const Login = lazy(() => import('../pages/Login'));
const Register = lazy(() => import('../pages/Register'));
const Diary = lazy(() => import('../pages/Diary'));
const Calculator = lazy(() => import('../pages/Calculator'));

export const App = () => {
  const refresh = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();
  const showModal = useSelector(state => state.auth.showModal);
  const showModalDiary = useSelector(state => state.products.showModalDiary);
  const showModalMenu = useSelector(state => state.auth.showModalMenu);

  useEffect(() => {
    dispatch(fetchRefreshToken());
  }, [dispatch]);

  useEffect(() => {
    if (!refresh) {
      return;
    }

    dispatch(fetchCurrentUser());
  }, [refresh, dispatch]);

  return !refresh ? (
    <BigLoader />
  ) : (
    <>
      {showModal && <Modal />}
      {showModalDiary && <ModalDiary />}
      {showModalMenu && <ModalMenu />}

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/calculator" />} />
          <Route
            path="login"
            element={
              <PublicRouteLogin restricted>
                <Login />
              </PublicRouteLogin>
            }
          />
          <Route
            path="register"
            element={
              <PublicRouteRegister restricted>
                <Register />
              </PublicRouteRegister>
            }
          />
          <Route
            path="calculator"
            element={
              <PublicRoute>
                <Calculator />
              </PublicRoute>
            }
          />
          <Route
            path="diary"
            element={
              <PrivateRoute>
                <Diary />
              </PrivateRoute>
            }
          />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
        {/* чи зробити тут сторінку 404? в path * */}
      </Routes>
    </>
  );
};
