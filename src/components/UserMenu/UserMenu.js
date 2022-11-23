import scss from './UserMenu.module.scss';
import { NavLink } from 'react-router-dom';

const UserMenu = () => {
  return (
    <div className={scss.box}>
      <div className={scss.nav}>
        <NavLink className={scss.text} to="/diary">
          Diary
        </NavLink>
        <NavLink className={scss.text} to="/calculator">
          Calculator
        </NavLink>
      </div>
      <div className={scss.rightBar}>
        <p>Welcome, Repeta</p>
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
