import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile, faMeh, faFrown } from '@fortawesome/free-solid-svg-icons';
import './Home.css';

const Home = ({ setDifficulty }) => {
  return (
    <div className="home-container">
      <div className='home-header'>
        <h1>Hangman</h1>
        <h3>Select Difficulty Level</h3>
      </div>
      
      <div className="difficulty-cards">
        <div className="card easy" onClick={() => setDifficulty('easy')}>
          <FontAwesomeIcon icon={faSmile} size="3x" />
          <h2>Easy</h2>
        </div>
        <div className="card medium" onClick={() => setDifficulty('medium')}>
          <FontAwesomeIcon icon={faMeh} size="3x" />
          <h2>Medium</h2>
        </div>
        <div className="card hard" onClick={() => setDifficulty('hard')}>
          <FontAwesomeIcon icon={faFrown} size="3x" />
          <h2>Hard</h2>
        </div>
      </div>
      <div className='content'>
        <h3>Play the guessing game!</h3>
      </div>
    </div>
  );
};

export default Home;
