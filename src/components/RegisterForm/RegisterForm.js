import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { register } from 'redux/auth/operations';
import { useEffect, useState } from 'react';
import css from './RegisterForm.module.scss';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nameDirty, setNameDirty] = useState('');
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [nameError, setNameError] = useState('Pleas enter name');
  const [emailError, setEmailError] = useState('Pleas enter email');
  const [passwordError, setPasswordError] = useState('Pleas enter password');
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (emailError || passwordError || nameError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, passwordError, nameError]);

  const blurHandler = e => {
    switch (e.target.name) {
      case 'name':
        setNameDirty(true);
        break;
      case 'email':
        setEmailDirty(true);
        break;
      case 'password':
        setPasswordDirty(true);
        break;
      default:
        return;
    }
  };

  const nameHandler = e => {
    setName(e.target.value);
    if (e.target.value.length < 3) {
      setNameError('Name length must be at least 3 characters long');
      if (!e.target.value) {
        setNameError('Pleas enter name');
      }
    } else {
      setNameError('');
    }
  };

  const emailHandler = e => {
    setEmail(e.target.value);
    const re =
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError('Pleas enter valid email');
    } else {
      setEmailError('');
    }
  };

  const passwordHandler = e => {
    setPassword(e.target.value);
    if (e.target.value.length < 8) {
      setPasswordError('Password must be at least 8 characters');
      if (!e.target.value) {
        setPasswordError('Pleas enter password');
      }
    } else {
      setPasswordError('');
    }
  };

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
    setPassword('');
    setEmail('');
    setName('');
  };

  return (
    <div className={css.box}>
      <div className={css.container}>
        <h3 className={css.header}>REGISTER</h3>
        <div>
          <form onSubmit={handleSubmit} autoComplete="off">
            <div className={css.register}>
              <label className={css.label}>
                {nameDirty && nameError && (
                  <div style={{ color: 'red' }}>{nameError}</div>
                )}
                <input
                  autoComplete="name"
                  required
                  value={name}
                  onChange={e => nameHandler(e)}
                  onBlur={e => blurHandler(e)}
                  className={css.input}
                  type="text"
                  name="name"
                  placeholder="Name *"
                />
              </label>
              <label className={css.label}>
                {emailDirty && emailError && (
                  <div style={{ color: 'red' }}>{emailError}</div>
                )}
                <input
                  autoComplete="email"
                  required
                  value={email}
                  onChange={e => emailHandler(e)}
                  onBlur={e => blurHandler(e)}
                  className={css.input}
                  type="email"
                  name="email"
                  placeholder="Email *"
                />
              </label>
              <label className={css.label}>
                {passwordDirty && passwordError && (
                  <div style={{ color: 'red' }}>{passwordError}</div>
                )}
                <input
                  autoComplete="password"
                  required
                  value={password}
                  onChange={e => passwordHandler(e)}
                  onBlur={e => blurHandler(e)}
                  className={css.input}
                  type="password"
                  name="password"
                  placeholder="Password *"
                />
              </label>
            </div>

            <div className={css.buttonSection}>
              <NavLink className={css.btnTransperent} to="/login">
                Login
              </NavLink>

              <button
                disabled={!formValid}
                className={css.btnOrange}
                type="submit"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
