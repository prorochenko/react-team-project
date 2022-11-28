import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.scss';
import styled from 'styled-components';

const NavItems = styled(NavLink)`
  color: #9b9faa;
  text-decoration: none;
  &.active {
    color: #212121;
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: #9b9faa;
  }
`;

const AuthNav = () => {
  return (
    <div className={css.nav}>
      <NavItems className={css.text} to="/login">
        SIGN IN
      </NavItems>
      <NavItems className={css.text} to="/register">
        Registration
      </NavItems>
    </div>
  );
};
export default AuthNav;
