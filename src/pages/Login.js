import { Helmet } from 'react-helmet-async';
import { LoginForm } from 'components/LoginForm/LoginForm';

export default function Login() {
  return (
    <div>
      <Helmet>
        <meta name="description" content="Login page" />
        <title>Login</title>
      </Helmet>
      <LoginForm />
    </div>
  );
}
