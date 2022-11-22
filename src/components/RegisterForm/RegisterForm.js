// import { useDispatch } from 'react-redux';
// import { register } from 'redux/auth/operations';
// import css from './RegisterForm.module.css';
import css from './RegisterForm.module.css';

export const RegisterForm = () => {
  // const dispatch = useDispatch();

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   const form = e.currentTarget;
  //   dispatch(
  //     register({
  //       name: form.elements.name.value,
  //       email: form.elements.email.value,
  //       password: form.elements.password.value,
  //     })
  //   );
  //   form.reset();
  // };

  return (
    <div className={css.container}>
      <h3 className={css.header}>REGISTER</h3>
      <div>
        <form
          // onSubmit={handleSubmit}
          autoComplete="off"
          className={css.register}
        >
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
          <button className={css.btnOrange} type="button">
            Вход
          </button>
          <button className={css.btnTransperent} type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};
