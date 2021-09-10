import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import About from './components/About';

// function findGreeting() {
//   let d = new Date();
//   let greeting = "";
//   if (d.getHours() >= 1 && d.getHours() < 12) {
//     greeting = "good morning";
//   } else if (d.getHours() >= 12 && d.getHours() < 17) {
//     greeting = "good afternoon";
//   }
//   else if (d.getHours() >= 17 && d.getHours() < 21) {
//     greeting = "good evening";
//   }
//   else if (d.getHours() >= 21 && d.getHours() < 24) {
//     greeting = "good night";
//   }

//   return greeting;

// }

// export default findGreeting;

const App = () => {
  const [mode, setmode] = useState('white');

  const changeMode = () => {
    if (mode === "white") {
      setmode("black");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    }
    else {
      setmode("white");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  }



  return (<>
      <Navbar title="TextUtils" mode={mode} chngMode={changeMode} />
      <Switch>
      <Route exact path="/">
      <Textform heading="Enter your text below" mode={mode} />
      </Route>
      <Route exact path="/About">
        <About/>
      </Route>
    </Switch>

  </>);
}

export default App;