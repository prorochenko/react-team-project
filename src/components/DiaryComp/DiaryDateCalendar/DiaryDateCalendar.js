// import React, { useState } from 'react';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import React, { useState } from 'react';
import DatePicker from 'react-date-picker';
import { selectorTest } from 'redux/Summary/summarySelectors';
import css from './DiaryDateСalendar.module.scss';
import { getInfoByDay } from '../../../redux/Summary/summaryOperations';
import { addDay } from '../../../redux/products/products-operations';

export default function DiaryDateCalendar() {
  const [value, setValue] = useState(new Date());

  const test = useSelector(selectorTest);
  console.log(test);
  const dispatch = useDispatch();
  const handleChange = e => {
    setValue(e);
    dispatch(addDay(moment(e).format('yyyy-MM-DD')));
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
