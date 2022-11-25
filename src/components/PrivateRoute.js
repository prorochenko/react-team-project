import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';

export const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  // const shouldRedirect = isLoggedIn && restricted;
  console.log(isLoggedIn);
  return isLoggedIn ? children : <Navigate to="/login" />;
};
