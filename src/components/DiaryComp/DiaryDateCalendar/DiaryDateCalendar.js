import { useDispatch } from 'react-redux';
import moment from 'moment';
import React, { useState, useEffect } from 'react';
import DatePicker from 'react-date-picker';
import css from './DiaryDateСalendar.module.scss';
import { getInfoByDay } from '../../../redux/products/products-operations';
import { getDateCalendar } from 'redux/products/products-slice';
// import styled from 'styled-components';
export default function DiaryDateCalendar() {
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
    dispatch(getDateCalendar(moment(value).format('yyyy-MM-DD')));
    // getCalendarDate(value);
  }, [value, dispatch]);

  const handleChange = e => {
    setValue(e);

    // dispatch(addDay(moment(e).format('yyyy-MM-DD')));
    dispatch(getInfoByDay({ date: moment(e).format('yyyy-MM-DD') }));
    dispatch(getDateCalendar(moment(e).format('yyyy-MM-DD')));
  };

  return (
    <div className={css.wrap}>
      <DatePicker
        onChange={handleChange}
        value={value}
        clearIcon={null}
        format={'dd.MM.y'}
        className={css.calendarWrap}
        calendarClassName={css.calendar}
        tileClassName={css.calendarDate}
        // calendarIcon={styled: {}}
      />
    </div>
  );
}
