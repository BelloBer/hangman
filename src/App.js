import React, { useState } from 'react';
import './App.css';
import Home from './components/Home';
import Game from './components/Game';

function App() {
  const [difficulty, setDifficulty] = useState(null);

  const goBack = () => {
    setDifficulty(null);
  };

  return (
    <div className="App">
      {difficulty === null ? (
        <Home setDifficulty={setDifficulty} />
      ) : (
        <Game difficulty={difficulty} goBack={goBack} />
      )}
    </div>
  );
}

export default App;
