// import React, { useState } from 'react';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
import React, { useState } from 'react';
import DatePicker from 'react-date-picker';
import css from './DiaryDateСalendar.module.scss';

export default function DiaryDateCalendar() {
  const [value, onChange] = useState(new Date());

  return (
    <div className={css.wrap}>
      <DatePicker
        onChange={onChange}
        value={value}
        clearIcon={null}
        format={'dd.MM.y'}
        className={css.calendar}
      />
    </div>
  );
}
