import { Route, Routes, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { lazy } from 'react';
import { selectIsRefreshing } from 'redux/auth/selectors';
import { fetchRefreshToken, fetchCurrentUser } from 'redux/auth/operations';
import { PrivateRoute } from './PrivateRoute.js';
import { PublicRoute, PublicRouteLogin } from './PublicRoute.js';
import BigLoader from './Loader/BigLoader';

import Modal from '../components/Modal/Modal';
import Layout from './Layout';

// const Layout = lazy(() => import('./Layout'));
const Login = lazy(() => import('../pages/Login'));
const Register = lazy(() => import('../pages/Register'));
const Diary = lazy(() => import('../pages/Diary'));
const Calculator = lazy(() => import('../pages/Calculator'));

export const App = () => {
  const refresh = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();
  const showModal = useSelector(state => state.showModal);

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
              <PublicRoute restricted>
                <Register />
              </PublicRoute>
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
