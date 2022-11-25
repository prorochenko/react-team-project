// import { Helmet } from 'react-helmet-async';
import CalculatorForm from '../components/CalculatorForm/CalculatorForm';

const Calculator = () => {
  return (
    <div>
      {/* <Helmet>
        <meta
          name="description"
          content="Calculator page where you can calculate your "
        />
        <title>Calculator</title> */}
      <CalculatorForm />
      {/* </Helmet> */}
    </div>
  );
};
export default Calculator;
