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
  const paramsHuman = useSelector(
    state => state.auth.user.userData.notAllowedProducts
  );

  // useEffect(() => {
  //   if (!isLoggedIn) {
  //     return;
  //   }
  // }, [isLoggedIn]);

  const shouldRedirect = isLoggedIn && paramsHuman.length > 0;

  // return shouldRedirect ? <Navigate to="/diary" /> : children;
  if (shouldRedirect) {
    return <Navigate to="/diary" />;
  } else if (isLoggedIn && paramsHuman.length === 0) {
    return <Navigate to="/calculator" />;
  } else {
    return children;
  }
};

export const PublicRouteRegister = ({ children, restricted = false }) => {
  const isRegister = useSelector(selectIsRegister);

  return isRegister ? <Navigate to="/login" /> : children;
};
