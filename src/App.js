import React, { useState, useRef } from 'react';
import './styles.css';
import logo from './assets/font.png';
import sound from './assets/Avengers.mp3';

export default function App() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  function togglePlay() {
    const audio = audioRef.current;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }

    setIsPlaying(!isPlaying);
  }

  return (
    <div className="Background">
      <form>
        <img src={logo} alt="Logo" width="200px" />
        <div className="input">
          <label htmlFor="fname">Name:</label>
          <input type="text" id="fname" required />
        </div>
        <div className="input">
          <label htmlFor="femail">Email:</label>
          <input type="text" id="femail" required />
        </div>
        <div className="input">
          <label htmlFor="fcontact">Contact:</label>
          <input type="text" id="fcontact" required />
        </div>
        <div className="input">
          <label htmlFor="fcontact">College:</label>
          <input type="text" id="fcontact" />
        </div>
        <button>
          Make Payment
        </button>
        <button type="button" onClick={togglePlay}>
          {isPlaying ? 'Pause Sound' : 'Play Sound'}
        </button>
      </form>
      <audio ref={audioRef} src={sound} />
    </div>
  );
}
