import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Battery from './containers/Battery';

const counterDefaultVal = {
  speed: {
    title: "Speed",
    unit: "mph",
    step: 5,
    min: 45,
    max: 70
  },
  temperature: {
    title: "Outside Temperature",
    unit: "°",
    step: 15,
    min: 20,
    max: 95
  }
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />  
        <Battery counterDefaultVal={counterDefaultVal}/>  
      </div>
    );
  }
}
export default App;