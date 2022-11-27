import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logIn } from 'redux/auth/operations';
import css from './LoginForm.module.scss';
import { useState } from 'react';
// import { bounceInLeft } from 'react-animations';
// import Radium, { StyleRoot } from 'radium';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState('Pleas enter email');
  const [passwordError, setPasswordError] = useState('Pleas enter password');

  (function () {
    document.addEventListener('mousemove', parallax);
    const elem = document.querySelector('#parallax');
    const elemBigLeaf = document.querySelector('#parallaxbigLeaf');
    const elemTop = document.querySelector('#parallaxTop');
    const elemRight = document.querySelector('#parallaxRight');
    const elemBottom = document.querySelector('#parallaxBottom ');
    const elemStrawberry = document.querySelector('#parallaxStrawberry  ');

    function parallax(e) {
      let _mouseX = e.clientX;
      let _mouseY = e.clientY;
      elem.style.transform =
        'translateX(' +
        _mouseX / -300 +
        '%) translateY(' +
        _mouseY / -300 +
        '%)';

      elemBigLeaf.style.transform =
        'translateX(' + _mouseX / -50 + '%) translateY(' + _mouseY / -50 + '%)';
      elemTop.style.transform =
        'translateX(' +
        _mouseX / -400 +
        '%) translateY(' +
        _mouseY / -1950 +
        '%)';
      elemRight.style.transform =
        'translateX(' +
        _mouseX / -600 +
        '%) translateY(' +
        _mouseY / 500 +
        '%)';
      elemBottom.style.transform =
        'translateX(' +
        _mouseX / -500 +
        '%) translateY(' +
        _mouseY / -300 +
        '%)';
      elemStrawberry.style.transform =
        'translateX(' +
        _mouseX / -300 +
        '%) translateY(' +
        _mouseY / -500 +
        '%)';
    }
  })();

  const blurHandler = e => {
    switch (e.target.name) {
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

  // const styles = {
  //   bounce: {
  //     animation: 'x 10s',
  //     animationName: Radium.keyframes(bounceInLeft, 'bounceInLeft'),
  //   },
  // };

  // const leaverMin = leaver;
  return (
    <div className={css.box}>
      {/* <img
        // style={styles.bounceInLeft}
        className={css.leaverSmall}
        src={leaverMin}
        alt=""
        width="95px"
        height="75px"
      />{' '} */}
      <div className={css.container}>
        <h3 className={css.header}>SIGN IN</h3>
        <form onSubmit={handleSubmit} autoComplete="off">
          <div className={css.register}>
            <label className={css.label}>
              {emailDirty && emailError && (
                <div style={{ color: 'red' }}>{emailError}</div>
              )}
              <input
                required
                autoComplete="name"
                value={email}
                onChange={e => emailHandler(e)}
                onBlur={e => blurHandler(e)}
                className={css.input}
                type="email"
                name="email"
                placeholder="Email *"
              />
            </label>
            <label>
              {passwordDirty && passwordError && (
                <div style={{ color: 'red' }}>{passwordError}</div>
              )}
              <input
                required
                autoComplete="email"
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
