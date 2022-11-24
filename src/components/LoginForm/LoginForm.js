import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logIn } from 'redux/auth/operations';
import css from './LoginForm.module.scss';
import { useEffect } from 'react';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { useNavigate } from 'react-router-dom';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/');
      return;
    }
  }, [navigate, isLoggedIn]);

  return (
    <div className={css.box}>
      <div className={css.container}>
        <h3 className={css.header}>SIGN IN</h3>
        <form onSubmit={handleSubmit} autoComplete="off">
          <div className={css.register}>
            <label className={css.label}>
              <input
                className={css.input}
                type="email"
                name="email"
                placeholder="Email *"
              />
            </label>
            <label>
              <input
                className={css.input}
                type="password"
                name="password"
                placeholder="Password *"
              />
            </label>
          </div>

          <div className={css.buttonSection}>
            <button className={css.btnOrange} type="submit">
              Login
            </button>
            <NavLink className={css.btnTransperent} to="/register">
              Register
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};
