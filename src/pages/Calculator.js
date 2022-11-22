import CalculatorForm from '../components/Calc/CalculatorForm';
import scss from './Calculator.module.scss';

const Calculator = () => {
  return (
    <div className={scss.container}>
      <CalculatorForm />
    </div>
  );
};
export default Calculator;
