import React, { useState, useEffect, useCallback } from 'react';
import { words } from '../data';
import Header from './Header';
import Figure from './Figure';
import WrongLetters from './WrongLetters';
import Word from './Word';
import Notification from './Notification';
import Popup from './Popup';
//import { showNotification as show, checkWin } from '../helpers/helpers';
import { showNotification as show} from '../helpers/helpers';
import './Game.css';

const Game = ({ difficulty, goBack }) => {
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [showNotification, setShowNotification] = useState(false);

  const wordData = words[difficulty][Math.floor(Math.random() * words[difficulty].length)];
  const [selectedWord, setSelectedWord] = useState(wordData.word);
  const [hint, setHint] = useState(wordData.hint);

  const handleKeydown = useCallback((event) => {
    const { key, keyCode } = event;

    if (playable && keyCode >= 65 && keyCode <= 90) {
      const letter = key.toLowerCase();

      if (selectedWord.includes(letter)) {
        if (!correctLetters.includes(letter)) {
          setCorrectLetters((currentLetters) => [...currentLetters, letter]);
        } else {
          show(setShowNotification);
        }
      } else {
        if (!wrongLetters.includes(letter)) {
          setWrongLetters((wrongLetters) => [...wrongLetters, letter]);
        } else {
          show(setShowNotification);
        }
      }
    }
  }, [playable, correctLetters, wrongLetters, selectedWord]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  }, [handleKeydown]);

  function playAgain() {
    setPlayable(true);
    setCorrectLetters([]);
    setWrongLetters([]);
    const newWordData = words[difficulty][Math.floor(Math.random() * words[difficulty].length)];
    setSelectedWord(newWordData.word);
    setHint(newWordData.hint);
  }

  return (
    <>
      <Header />
      <div className="game-grid">
        <div className="card game-card">
          <Figure wrongLetters={wrongLetters} />
        </div>
        <div className="card letters-card">
          <WrongLetters wrongLetters={wrongLetters} />
        </div>
        <div className="worddisplay">
          <Word selectedWord={selectedWord} correctLetters={correctLetters} />
        </div>
        <div className=" hint">Hint: {hint}</div>
      </div>
      <button className='backbtn' onClick={goBack}>Back</button>
      
      <Popup
        correctLetters={correctLetters}
        wrongLetters={wrongLetters}
        selectedWord={selectedWord}
        setPlayable={setPlayable}
        playAgain={playAgain}
      />
      <Notification showNotification={showNotification} />
    </>
  );
};

export default Game;
