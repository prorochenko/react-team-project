import { Navigation } from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';
// import { useAuth } from 'hooks/useAuth';
import css from './AppBar.module.scss';

export const AppBar = () => {
  // const { isLoggedIn } = useAuth();

  return (
    <header className={css.box}>
      <div className={css.temp}>
        <Navigation />
        <UserMenu />
      </div>
      <AuthNav />
    </header>
  );
};
