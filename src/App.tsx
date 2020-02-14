import React, {Component} from 'react';
import './App.css';
import DateSelector from "./components/DateSelector";
import moment from "moment";
import Meteogram from "./components/Meteogram";

interface State {
    date: string | null;
}

class App extends Component<{}, State> {
    state = {date: null}
    handleDateChange = (date: string) => {
        this.setState({date})
    }

    render() {
        return (<div>
            <DateSelector date={moment(new Date())} handleDateChange={this.handleDateChange}/>
            <Meteogram date={this.state.date} col={241} row={458}></Meteogram>
        </div>)
    }
}

export default App;
