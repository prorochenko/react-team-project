import DiaryAddProductForm from './DiaryAddProductForm/DiaryAddProductForm';

import DiaryProductsList from './DiaryProductsList/DiaryProductsList';
import { FiPlus } from 'react-icons/fi';
import scss from './DiaryComp.module.scss';
import DiaryDateCalendar from './DiaryDateCalendar/DiaryDateCalendar';
import moment from 'moment';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { toggle } from 'redux/auth/authSlice';

export default function DiaryComp() {
  const dispatch = useDispatch();
  const [date, setDate] = useState('');

  const getCalendarDate = newDate => {
    setDate(moment(newDate).format('yyyy-MM-DD'));
  };

  const openModal = useCallback(() => {
    dispatch(toggle(true));
  }, [dispatch]);

  return (
    <div className={scss.container}>
      <DiaryDateCalendar getCalendarDate={getCalendarDate} />
      <DiaryAddProductForm date={date} />
      <DiaryProductsList />
      <button className={scss.formBtn} type="button" onClick={openModal}>
        <FiPlus className={scss.icon} />
      </button>
    </div>
  );
}
