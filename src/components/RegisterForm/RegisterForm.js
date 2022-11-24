import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { register } from 'redux/auth/operations';
import css from './RegisterForm.module.scss';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        username: form.elements.name.value,
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
        <h3 className={css.header}>REGISTER</h3>
        <div>
          <form onSubmit={handleSubmit} autoComplete="off">
            <div className={css.register}>
              <label className={css.label}>
                <input
                  className={css.input}
                  type="text"
                  name="name"
                  placeholder="Name *"
                />
              </label>
              <label className={css.label}>
                <input
                  className={css.input}
                  type="email"
                  name="email"
                  placeholder="Email *"
                />
              </label>
              <label className={css.label}>
                <input
                  className={css.input}
                  type="password"
                  name="password"
                  placeholder="Password *"
                />
              </label>
            </div>

            <div className={css.buttonSection}>
              <NavLink className={css.btnOrange} to="/login">
                Login
              </NavLink>
              <button className={css.btnTransperent} type="submit">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
