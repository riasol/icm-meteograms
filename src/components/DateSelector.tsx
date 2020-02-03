import React from "react";
import {DatePicker} from "antd";
import * as moment from 'moment';

const DateSelector: React.FC<{
    date: moment.Moment,
    handleDateChange: (date: moment.Moment | null, dateString: string) => void
}> = ({date, handleDateChange}) => (
    <DatePicker onChange={handleDateChange} defaultValue={date} showTime={true} format={'YYYY-MM-dd H'}></DatePicker>);

export default DateSelector;