import React, { useState } from 'react';
import './App.css';
import Login from './components/Login/Login';
import PDA from './components/PDA/PDA';
import MiniGame from './components/MiniGame/MiniGame';

function App() {
  const [stage, setStage] = useState('login'); // 'login', 'usb', 'minigame', 'pda'
  const correctPassword = 'password123'; // Replace with your actual password
  const correctSerialNumber = '123456'; // Replace with your actual serial number
  const pdaImage = 'https://pm1.aminoapps.com/6758/fe7cd5c19bba65fc9968dcc2b686b01310192df3v2_00.jpg';

  const handleLoginSuccess = () => {
    setStage('pda');
  };

  const handleUSBConnect = () => {
    setStage('minigame');
  };

  const handleMiniGameSuccess = () => {
    // Do nothing here to prevent stage transition
  };

  const renderStage = () => {
    switch (stage) {
      case 'login':
        return (
          <div className="app-background">
            <div className="pda-container">
              <img src={pdaImage} alt="PDA" className="pda-image" />
              <Login
                onLoginSuccess={handleLoginSuccess}
                onUSBConnect={handleUSBConnect}
                correctPassword={correctPassword}
                correctSerialNumber={correctSerialNumber}
              />
            </div>
          </div>
        );
      case 'minigame':
        return (
          <div className="app-background">
            <div className="pda-container">
              <img src={pdaImage} alt="PDA" className="pda-image" />
              <MiniGame
                onMiniGameSuccess={handleMiniGameSuccess}
                correctPassword={correctPassword}
              />
            </div>
          </div>
        );
      case 'pda':
        return (
          <div className="app-background">
            <div className="pda-container">
              <img src={pdaImage} alt="PDA" className="pda-image" />
              <PDA />
            </div>
          </div>
        );
      default:
        return (
          <div className="app-background">
            <div className="pda-container">
              <img src={pdaImage} alt="PDA" className="pda-image" />
              <Login
                onLoginSuccess={handleLoginSuccess}
                onUSBConnect={handleUSBConnect}
                correctPassword={correctPassword}
                correctSerialNumber={correctSerialNumber}
              />
            </div>
          </div>
        );
    }
  };

  return (
    <div className="app-background">
      {renderStage()}
    </div>
  );
}

export default App;
