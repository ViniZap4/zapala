import React from 'react';

import './ContentBoxMenuDate.css'

//import contents
import { UseDate } from '../../../Context/DateContext'

export default function ContentBoxMenuDate(props) {
  const { date, mounthPlus, year, week, hours , min, sec} = UseDate()

  return (
    <div className="ContentBoxMenuDate">
      <div className="ContentBoxMenuDateTime">
        <div className="ContentBoxMenuDateTimeBox">
          <span className="ContentBoxMenuDateTimeDate">{date} de {mounthPlus} de {year}</span>
          <span className="ContentBoxMenuDateTimeWeek">{week}</span>
        </div>
        <span className="ContentBoxMenuDateTimeHours"> {hours}:{min}:{sec}</span>

      </div>
      <span className="ContentBoxMenuDatediv"></span>
      <div className="ContentBoxMenuDateCalendar">
        Calendário em desenvolvimento.
      </div>
    </div>
  );
}