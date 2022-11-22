import scss from './UserMenu.module.scss';

const UserMenu = () => {
  return (
    <div>
      <p>Welcome, usrname</p>
      <button
        className={scss.btnOrange}
        type="button"
        // onClick={() => dispatch(logOut())}
      >
        Logout
      </button>
    </div>
  );
};
export default UserMenu;
