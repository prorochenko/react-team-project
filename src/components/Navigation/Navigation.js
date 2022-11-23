import { NavLink } from 'react-router-dom';
// import { useAuth } from 'hooks/useAuth';
// import css from './Navigation.module.css';
import logo from '../../assets/images/logologoDesk1x.png';

export const Navigation = () => {
  // const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink to="/">
        <img src={logo} alt="logo" />
      </NavLink>
      {/* {isLoggedIn && */}
      {/* <NavLink to="/tasks">Tasks</NavLink> */}
    </nav>
  );
};
