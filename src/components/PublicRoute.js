import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectIsRefreshing } from 'redux/auth/selectors';
import { useEffect } from 'react';

export const PublicRoute = ({ children, restricted = false }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const refresh = useSelector(selectIsRefreshing);

  // useEffect(() => {
  //   if (!isLoggedIn) {
  //     return;
  //   }
  // }, [isLoggedIn]);

  const shouldRedirect = isLoggedIn && restricted;

  return shouldRedirect ? <Navigate to="/calculator" /> : children;
};
