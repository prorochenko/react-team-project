import { Helmet } from 'react-helmet-async';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';

export default function Register() {
  return (
    <div>
      <Helmet>
        <meta name="description" content="Registration page" />

        <title>Registration</title>
      </Helmet>
      <RegisterForm />
    </div>
  );
}
