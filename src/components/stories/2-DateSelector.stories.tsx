import DateSelector from '../DateSelector'
import React from "react";
import moment from 'moment';

export default {
    title: 'DateSelector',
    component: DateSelector,
};

export const Default = () => <DateSelector date={moment(new Date())} handleDateChange={()=>{}}></DateSelector>;
