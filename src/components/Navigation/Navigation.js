import { NavLink } from 'react-router-dom';
// import { useAuth } from 'hooks/useAuth';
import css from './Navigation.module.scss';
import { useSelector } from 'react-redux';

import logoDesk1x from '../../assets/images/logologoDesk1x.png';
import logoDesk2x from '../../assets/images/logologoDesk2x.png';
import logoSmall2x from '../../assets/images/logologoMob@2x.png';
import logoSmall1x from '../../assets/images/logologoMob@1x.png';
import logoTab1x from '../../assets/images/logologoTab@1x.png';
import logoTab2x from '../../assets/images/logologoTab@2x.png';
import { selectIsLoggedIn } from 'redux/auth/selectors';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={css.logo}>
      <NavLink to="/">
        <picture>
          {isLoggedIn && (
            <source
              srcSet={logoSmall1x}
              type="image/png"
              media="(max-width: 767px)"
            />
          )}
          {!isLoggedIn && (
            <source
              srcSet={logoSmall2x}
              type="image/png"
              media="(max-width: 767px)"
            />
          )}
          {isLoggedIn && (
            <source
              srcSet={logoTab1x}
              type="image/png"
              media="( max-width: 1279px)"
            />
          )}
          {isLoggedIn && (
            <source
              srcSet={logoTab2x}
              type="image/png"
              media="( max-width: 1279px)"
            />
          )}
          {!isLoggedIn && (
            <source
              srcSet={logoTab2x}
              type="image/png"
              media="( max-width: 1279px)"
              width="162px"
            />
          )}

          {isLoggedIn && (
            <source
              srcSet={logoDesk1x}
              type="image/png"
              media="(min-width: 1280px)"
            />
          )}
          {!isLoggedIn && (
            <source
              srcSet={logoDesk2x}
              type="image/png"
              media="(min-width: 1280px)"
            />
          )}

          <img src={logoDesk2x} alt="logo" loading="lazy" />
        </picture>
      </NavLink>
    </nav>
  );
};
