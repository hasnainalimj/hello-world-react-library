import React from 'react';
import udiliaLogo from './udilia-logo.svg';
import './HelloWorld.css';

const HelloWorld = () => (
  <div className="HelloWorld">
    <img src={udiliaLogo} alt="React logo" width="62" />
    <h1 className="HelloWorld-text">HelloWorld React Library</h1>
  </div>
);

export default HelloWorld;
