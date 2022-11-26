import DiaryAddProductForm from './DiaryAddProductForm/DiaryAddProductForm';

import DiaryProductsList from './DiaryProductsList/DiaryProductsList';
import { FiPlus } from 'react-icons/fi';
import scss from './DiaryComp.module.scss';

export default function DiaryComp() {
  return (
    <div className={scss.container}>
      <DiaryAddProductForm />
      <DiaryProductsList />
      <button className={scss.formBtn} type="button">
        <FiPlus className={scss.icon} />
      </button>
    </div>
  );
}
