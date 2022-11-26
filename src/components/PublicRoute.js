import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectIsRegister } from 'redux/auth/selectors';
// import { useEffect } from 'react';

export const PublicRoute = ({ children, restricted = false }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  // const refresh = useSelector(selectIsRefreshing);

  // useEffect(() => {
  //   if (!isLoggedIn) {
  //     return;
  //   }
  // }, [isLoggedIn]);

  const shouldRedirect = isLoggedIn && restricted;

  return shouldRedirect ? <Navigate to="/calculator" /> : children;
};

export const PublicRouteLogin = ({ children, restricted = false }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  // const refresh = useSelector(selectIsRefreshing);

  // useEffect(() => {
  //   if (!isLoggedIn) {
  //     return;
  //   }
  // }, [isLoggedIn]);

  const shouldRedirect = isLoggedIn && restricted;

  return shouldRedirect ? <Navigate to="/diary" /> : children;
};

export const PublicRouteRegister = ({ children, restricted = false }) => {
  const isRegister = useSelector(selectIsRegister);

  return isRegister ? <Navigate to="/login" /> : children;
};
