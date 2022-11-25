import PulseLoader from 'react-spinners/ClipLoader';
import css from './Loader.module.scss';

export default function LoadingComponent() {
  return (
    <div className={css.loader}>
      <PulseLoader color="#fc842d" />
    </div>
  );
}
