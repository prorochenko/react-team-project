import DiaryAddProductForm from './DiaryAddProductForm/DiaryAddProductForm';

import DiaryProductsList from './DiaryProductsList/DiaryProductsList';
import { FiPlus } from 'react-icons/fi';
import scss from './DiaryComp.module.scss';
import DiaryDateCalendar from './DiaryDateCalendar/DiaryDateCalendar';

import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { toggle } from 'redux/products/products-slice';

export default function DiaryComp() {
  const dispatch = useDispatch();
  // const [date, setDate] = useState('');

  // const getCalendarDate = newDate => {
  //   setDate(moment(newDate).format('yyyy-MM-DD'));
  // };

  const openModal = useCallback(() => {
    dispatch(toggle(true));
  }, [dispatch]);

  return (
    <div className={scss.container}>
      <DiaryDateCalendar />
      <DiaryAddProductForm />
      <DiaryProductsList />
      <button className={scss.formBtn} type="button" onClick={openModal}>
        <FiPlus className={scss.icon} />
      </button>
    </div>
  );
}
