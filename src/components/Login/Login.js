import React, { useState } from 'react';
import './Login.css';

const Login = ({ onLoginSuccess, onUSBConnect, correctPassword, correctSerialNumber }) => {
  const [password, setPassword] = useState('');
  const [serialNumber, setSerialNumber] = useState('');
  const [showUSBInput, setShowUSBInput] = useState(false);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSerialNumberChange = (e) => {
    setSerialNumber(e.target.value);
  };

  const handleLogin = () => {
    if (password === correctPassword) {
      onLoginSuccess();
    }
  };

  const handleUSBConnectClick = () => {
    setShowUSBInput(true);
  };

  const handleUSBSubmit = () => {
    if (serialNumber === correctSerialNumber) {
      onUSBConnect();
    } else {
      alert('Incorrect serial number');
    }
  };

  return (
    <div className="login-container">
      {!showUSBInput ? (
        <>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={handlePasswordChange}
          />
          <button onClick={handleLogin}>Login</button>
          <button onClick={handleUSBConnectClick}>Connect USB</button>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="Enter USB serial number"
            value={serialNumber}
            onChange={handleSerialNumberChange}
          />
          <button onClick={handleUSBSubmit}>Submit</button>
        </>
      )}
    </div>
  );
};

export default Login;
