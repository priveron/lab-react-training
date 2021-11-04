import React from 'react';
import logo from './logo.svg';
import './App.css';
import Random from './components/Random';
import BoxColor from './components/BoxColor';

function App() {
  return (
    <div className="App">
      <Random min={1} max={6}/>
      <Random min={1} max={100}/>
      <BoxColor r={255} g={0} b={0}/>
      <BoxColor r={128} g={255} b={0} />
    </div>
  );
}

export default App;
