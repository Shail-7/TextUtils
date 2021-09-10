import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router,
     Route, Switch } from 'react-router-dom';


// const name="shail";
// let d=new Date();
// let date=d.getDate()+"-"+d.getMonth()+"-"+d.getFullYear();
// let time=d.getHours()+":"+d.getMinutes();
// ReactDOM.render( <>
// <h1>hello my name is {name}</h1>
// <p>Today's date is {date}</p>
// <p>Current time is {time}</p>

// </>
//     ,document.getElementById("root"));

// let d = new Date();
// let greeting = "";
// if (d.getHours() >= 1 && d.getHours() < 12) {
//     greeting = "good morning";
// } else if (d.getHours() >= 12 && d.getHours() < 17) {
//     greeting = "good afternoon";
// }
// else if (d.getHours() >= 17 && d.getHours() < 21) {
//     greeting = "good evening";
// }
// else if (d.getHours() >= 21 && d.getHours() < 24) {
//     greeting = "good night";
// }


ReactDOM.render(
<Router>
<App/>
</Router>

    , document.getElementById("root"));