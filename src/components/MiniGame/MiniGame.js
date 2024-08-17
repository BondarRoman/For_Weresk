import React, { useState, useEffect } from 'react';
import './MiniGame.css';

const icons = ['💻', '🔒', '🖥️', '📁', '🔧', '📡', '🔑', '📊'];

const MiniGame = ({ onMiniGameSuccess, correctPassword }) => {
  const [gameCompleted, setGameCompleted] = useState(false);
  const [grid, setGrid] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const gridSize = 4;

  useEffect(() => {
    const doubledIcons = [...icons, ...icons];
    const shuffledIcons = doubledIcons.sort(() => Math.random() - 0.5);
    setGrid(shuffledIcons.slice(0, gridSize * gridSize));
  }, []);

  const handleCellClick = (index) => {
    if (flipped.length === 2 || gameCompleted || matched.includes(index)) return;

    setFlipped([...flipped, index]);

    if (flipped.length === 1) {
      const firstIndex = flipped[0];
      const secondIndex = index;

      if (grid[firstIndex] === grid[secondIndex]) {
        setMatched([...matched, firstIndex, secondIndex]);

        if (matched.length + 2 === gridSize * gridSize) {
          setGameCompleted(true);
          onMiniGameSuccess();
        }
      }

      setTimeout(() => {
        setFlipped([]);
      }, 1000);
    }
  };

  return (
    <div className="minigame-container">
      <h1>Process hacking...</h1>
      <div className="grid" style={{ gridTemplateColumns: `repeat(${gridSize}, 1fr)` }}>
        {grid.map((icon, index) => (
          <div
            key={index}
            className={`cell ${flipped.includes(index) || matched.includes(index) ? 'flipped' : ''}`}
            onClick={() => handleCellClick(index)}
          >
            {flipped.includes(index) || matched.includes(index) ? icon : '?'}
          </div>
        ))}
      </div>
      {gameCompleted && <p>Password hacked: {correctPassword}</p>}
    </div>
  );
};

export default MiniGame;
