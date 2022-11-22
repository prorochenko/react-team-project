import scss from './UserMenu.module.scss';

const UserMenu = () => {
  return (
    <div>
      <p>Welcome, usrname</p>
      <button
        className={scss.btn}
        type="button"
        // onClick={() => dispatch(logOut())}
      >
        Exit
      </button>
    </div>
  );
};
export default UserMenu;
