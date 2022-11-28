import scss from './UserMenu.module.scss';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { selectShowModalMenu, selectUser } from 'redux/auth/selectors';
import { BiMenu } from 'react-icons/bi';
import { useCallback } from 'react';
import { toggleBurger } from 'redux/auth/authSlice';
import { IoClose } from 'react-icons/io5';

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

  const showModalMenu = useSelector(selectShowModalMenu);

  const openModal = useCallback(() => {
    dispatch(toggleBurger(true));
  }, [dispatch]);

  const onClose = useCallback(() => {
    dispatch(toggleBurger(false));
  }, [dispatch]);

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
        <NavLink className={scss.user} to="/diary">
          {user.username}
        </NavLink>

        <button
          className={scss.btn}
          type="button"
          onClick={() => dispatch(logOut())}
        >
          Exit
        </button>
      </div>
      {!showModalMenu ? (
        <button className={scss.btn_modal} type="button" onClick={openModal}>
          <BiMenu className={scss.btn_icon} />
        </button>
      ) : (
        <button
          className={scss.btn_modal}
          type="button"
          onClick={onClose}
        >
          <IoClose className={scss.btn_icon} />
        </button>
      )}
    </div>
  );
};
export default UserMenu;
