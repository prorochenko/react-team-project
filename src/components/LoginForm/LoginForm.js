import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import css from './LoginForm.module.scss';

export const LoginForm = () => {
  const dispatch = useDispatch();

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

  return (
    <div className={css.container}>
      <h3 className={css.header}>SIGN IN</h3>
      <form className={css.register} onSubmit={handleSubmit} autoComplete="off">
        <label className={css.label}>
          <input
            className={css.input}
            type="email"
            name="email"
            placeholder="Name *"
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
        <button className={css.btnOrange} type="button">
          Вход
        </button>
        <button className={css.btnTransperent} type="submit">
          LogIn
        </button>
      </form>
    </div>
  );
};
