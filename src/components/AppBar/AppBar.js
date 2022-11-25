import { Navigation } from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';
import { Suspense } from 'react';
import LoadingComponent from '../Loader/Loader.jsx';
import { useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectIsRefreshing,
  selectUser,
} from 'redux/auth/selectors';

import css from './AppBar.module.scss';

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const refresh = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);

  return (
    <header className={css.box}>
      <div className={css.temp}>
        <Suspense fallback={<LoadingComponent />}>
          <Navigation />
          {/* {(isLoggedIn && !refresh) || refresh ? <UserMenu /> : ''} */}
          {/* {!isLoggedIn && !refresh && refresh ? <AuthNav /> : ''} */}
          {isLoggedIn && <UserMenu />}
          {!isLoggedIn && <AuthNav />}
          {/* {!refresh ? <div>hey</div> : <UserMenu />}
        {!refresh ? <AuthNav /> } */}{' '}
        </Suspense>
      </div>
    </header>
  );
};
