import scss from './UserMenu.module.scss';
import { NavLink } from 'react-router-dom';
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

const UserMenu = () => {
  return (
    <div className={scss.box}>
      <div className={scss.nav}>
        <NavItems className={scss.text} to="/diary">
          Diary
        </NavItems>
        <NavItems className={scss.text} to="/calculator">
          Calculator
        </NavItems>
      </div>
      <div className={scss.rightBar}>
        <p className={scss.user}>Welcome, Repeta</p>
        <button
          className={scss.btn}
          type="button"
          // onClick={() => dispatch(logOut())}
        >
          Exit
        </button>
      </div>
    </div>
  );
};
export default UserMenu;
