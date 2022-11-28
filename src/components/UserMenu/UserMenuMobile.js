import scss from './UserMenuMobile.module.scss';

import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';

const UserMenuMobile = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={scss.box__mob}>
      <p className={scss.user_mob}>{user.username}</p>
      <button
        className={scss.btn__mob}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Exit
      </button>
    </div>
  );
};
export default UserMenuMobile;
