import AuthNav from '../AuthNav/AuthNav';
// import { Suspense } from 'react';
// import LoadingComponent from '../Loader/Loader.jsx';

import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { Navigation } from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import css from './AppBar.module.scss';
import UserMenuMobile from 'components/UserMenu/UserMenuMobile';

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className={css.box}>
      <div className={css.temp}>
        <Navigation />

        {isLoggedIn && (
          // <Suspense fallback={<LoadingComponent />}>
          <UserMenu />

          // </Suspense>
        )}

        {!isLoggedIn && <AuthNav />}
      </div>
      {isLoggedIn && <UserMenuMobile className={css.mob} />}
    </header>
  );
};
