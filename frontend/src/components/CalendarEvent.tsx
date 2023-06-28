import React, { FC } from 'react';
import { Calendar } from 'antd';
import { IEvent } from '../models/IEvent';
import { Moment } from 'moment';
import { formatDate } from '../utils/date';
import type { Dayjs } from 'dayjs';
interface EventCalendarProps {
  events: IEvent[];
}

const CalendarEvent: FC<EventCalendarProps> = (props) => {
  const dateCellRender = (value: Dayjs) => {
    const formatedDate = formatDate(value.toDate());
    const currentDayEvents = props.events.filter((ev) => ev.date === formatedDate);
    return (
      <div>{currentDayEvents.map((ev, index) => <div key={index}>{ev.description}</div>)}</div>
    )
  };
  return (
    <Calendar
     dateCellRender={dateCellRender}
      />
  )
}

export default CalendarEvent;