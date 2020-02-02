import DateSelector from '../components/DateSelector'
import React from "react";
import * as moment from 'moment';

export default {
    title: 'DateSelector',
    component: DateSelector,
};

export const Default = () => <DateSelector date={moment(new Date())}></DateSelector>;
