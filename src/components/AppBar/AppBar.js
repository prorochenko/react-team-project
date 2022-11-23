import { Navigation } from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';

import css from './AppBar.module.scss';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className={css.box}>
      <div className={css.temp}>
        <Navigation />
        {isLoggedIn && <UserMenu />}
      </div>
      {!isLoggedIn && <AuthNav />}
    </header>
  );
};
