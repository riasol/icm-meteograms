import React, {Component} from "react";
import {DatePicker, Select} from "antd";
import moment from 'moment';
import {combineLatest, ReplaySubject} from "rxjs";

interface Props {
    date: moment.Moment;
    handleDateChange: (dateString: string) => void;
}

interface State {
    day: string | undefined;
    hour: string;
}

class DateSelector extends Component<Props, State> {
    state: Readonly<State> = {
        day: moment().format('YYYYMMDD'),
        hour: '00'
    };
    hour$ = new ReplaySubject<string>(1);
    day$ = new ReplaySubject<string>(1);

    constructor(props: Props) {
        super(props);
        combineLatest([this.day$, this.hour$])
            .subscribe(([day, hour]) => {
                this.props.handleDateChange(`${day}${hour}`)
            });
        this.day$.next(this.state.day);
        this.hour$.next(this.state.hour);
    }

    render() {
        const {Option} = Select;
        const hours = '00 06 12 18'.split(' ');
        return (
            <React.Fragment>
                <DatePicker onChange={(date) => {
                    this.day$.next(date?.format('YYYYMMDD'))
                }} defaultValue={moment(this.state.day)} showTime={false} format={'YYYY-MM-DD'}/>
                godzina:
                <Select onChange={(val: any) => {
                    this.hour$.next(val)
                }} defaultValue={this.state.hour}>
                    {hours.map(hour => <Option value={hour} key={hour}>{hour}</Option>)}
                </Select>
            </React.Fragment>)
    }
}

export default DateSelector;