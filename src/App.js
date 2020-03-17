import React from 'react';
import './App.css'
import BoxTopLeft from './components/BoxLeftTop'

function App() {
  return (
    <div className="grid">
      <div className="box-left-top"><BoxTopLeft /></div>
      <div className="box-right-top"><p>Player 2 Camera</p></div>
      <div className="box-left-bottom"><p>Player 1 Cards</p></div>
      <div className="box-right-bottom"><p>Player 2 Cards</p></div>      
    </div>
  );
}

export default App;
