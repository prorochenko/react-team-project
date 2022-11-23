import { Route, Routes, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { lazy } from 'react';
import { selectIsRefreshing } from 'redux/auth/selectors';
import { fetchRefreshToken, fetchCurrentUser } from 'redux/auth/operations';
import Modal from '../components/Modal/Modal';
import { Layout } from './Layout';
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

  return (
    <>
      {/* {shoModal&&} */}
      {showModal && <Modal />}

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/calculator" />} />

          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="calculator" element={<Calculator />} />
          <Route path="diary" element={<Diary />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
        {/* чи зробити тут сторінку 404? в path * */}
      </Routes>
    </>
  );
};
