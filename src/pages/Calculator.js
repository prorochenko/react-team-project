import CalculatorForm from '../components/CalculatorForm/CalculatorForm';
import scss from './Calculator.module.scss';

const Calculator = () => {
  return (
    <div className={scss.container}>
      <CalculatorForm />
    </div>
  );
};
export default Calculator;
