import scss from './UserMenu.module.scss';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';

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
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
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
        <p className={scss.user}>{user.username}</p>

        <button
          className={scss.btn}
          type="button"
          onClick={() => dispatch(logOut())}
        >
          Exit
        </button>
      </div>
    </div>
  );
};
export default UserMenu;
