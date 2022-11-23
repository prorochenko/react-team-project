import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.scss';

const AuthNav = () => {
  return (
    <div className={css.nav}>
      <NavLink className={css.text} to="/register">
        Registration
      </NavLink>
      <NavLink className={css.text} to="/login">
        SIGN IN
      </NavLink>
    </div>
  );
};
export default AuthNav;
