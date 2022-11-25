import { NavLink } from 'react-router-dom';
// import { useAuth } from 'hooks/useAuth';
// import css from './Navigation.module.css';
import { useSelector } from 'react-redux';

import logo from '../../assets/images/logologoDesk1x.png';
import logoSmall2x from '../../assets/images/logologoMob@2x.png';
import logoSmall1x from '../../assets/images/logologoMob@1x.png';
import logoTab1x from '../../assets/images/logologoTab@1x.png';
import { selectIsLoggedIn } from 'redux/auth/selectors';

export const Navigation = () => {
  // const { isLoggedIn } = useAuth();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav>
      <NavLink to="/">
        <picture>
          {/* <source
            srcSet="
                  ./images/hero/img_desk_001@1x.webp 1x,
                  ./images/hero/img_desk_001@2x.webp 2x
                "
            type="image/webp"
            media="(min-width: 1280px)"
          />
          <source
            srcSet="
                  ./images/hero/img_desk_001@1x.png 1x,
                  ./images/hero/img_desk_001@2x.png 2x
                "
            type="image/png"
            media="(min-width: 1280px)"
          />*/}
          {isLoggedIn && (
            <source
              srcSet={logoTab1x}
              type="image/png"
              media="(min-width: 320px)"
            />
          )}
          {!isLoggedIn && (
            <source srcSet={logo} type="image/png" media="(min-width: 320px)" />
          )}
          <source srcSet={logo} type="image/png" media="(min-width: 768px)" />

          <img
            // class="slider__img"
            src={logo}
            alt="logo"
            loading="lazy"
            // width="528"
            // height="528"
          />
        </picture>

        {/* <img src={logo} alt="logo" /> */}
      </NavLink>
      {/* {isLoggedIn && */}
      {/* <NavLink to="/tasks">Tasks</NavLink> */}
    </nav>
  );
};
