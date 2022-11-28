import { useDispatch } from 'react-redux';
import moment from 'moment';
import React, { useState, useEffect } from 'react';
import DatePicker from 'react-date-picker';
import css from './DiaryDateСalendar.module.scss';
import { getInfoByDay } from '../../../redux/products/products-operations';

export default function DiaryDateCalendar({ getCalendarDate }) {
  const [value, setValue] = useState(new Date());

  const dispatch = useDispatch();

  useEffect(
    e => {
      // dispatch(addDay(moment(e).format('yyyy-MM-DD')));
      dispatch(getInfoByDay({ date: moment(e).format('yyyy-MM-DD') }));
    },
    [dispatch]
  );
  useEffect(() => {
    getCalendarDate(value);
  }, [getCalendarDate, value]);

  const handleChange = e => {
    setValue(e);

    // dispatch(addDay(moment(e).format('yyyy-MM-DD')));
    dispatch(getInfoByDay({ date: moment(e).format('yyyy-MM-DD') }));
  };

  

  return (
    <div className={css.wrap}>
      <DatePicker
        onChange={handleChange}
        value={value}
        clearIcon={null}
        format={'dd.MM.y'}
        className={css.calendar}
      />
    </div>
  );
}
