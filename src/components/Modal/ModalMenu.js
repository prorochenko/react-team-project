import scss from './ModalMenu.module.scss';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { toggle } from 'redux/auth/authSlice';
import ModalUniversal from './ModaUniversal';

const NavItems = styled(NavLink)`
  color: #9b9faa;
  text-decoration: none;
  &.active {
    color: #ffffff;
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: #9b9faa;
  }
`;

const ModalMenu = () => {
  const dispatch = useDispatch();
  const onClose = useCallback(() => {
    dispatch(toggle(false));
  }, [dispatch]);
  return (
    <ModalUniversal>
      <div className={scss.box_modal}>
        <div className={scss.nav_modal}>
          <NavItems className={scss.text_modal} to="/diary" onClick={onClose}>
            Diary
          </NavItems>
          <NavItems
            className={scss.text_modal}
            to="/calculator"
            onClick={onClose}
          >
            Calculator
          </NavItems>
        </div>
      </div>
    </ModalUniversal>
  );
};
export default ModalMenu;
