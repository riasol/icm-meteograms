import React from 'react';
import './App.css';
import DateSelector from "./components/DateSelector";
import moment from "moment";

const handleDateChange=()=>{

}
const App = () => {
  return (
    <DateSelector date={moment(new Date())} handleDateChange={handleDateChange}/>
  );
}

export default App;
