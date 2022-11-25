import { Navigation } from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';
// import { useEffect } from 'react';

import css from './AppBar.module.scss';
import { useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectIsRefreshing,
  selectUser,
} from 'redux/auth/selectors';

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const refresh = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);

  return (
    <header className={css.box}>
      <div className={css.temp}>
        <Navigation />
        {/* {(isLoggedIn && !refresh) || refresh ? <UserMenu /> : ''} */}
        {/* {!isLoggedIn && !refresh && refresh ? <AuthNav /> : ''} */}
        {isLoggedIn && <UserMenu />}
        {!isLoggedIn && <AuthNav />}
        {/* {!refresh ? <div>hey</div> : <UserMenu />}
        {!refresh ? <AuthNav /> } */}
      </div>
    </header>
  );
};
