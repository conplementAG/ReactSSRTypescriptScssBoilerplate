import React from 'react';
import './Home.css';
import logo from './conplement_logo.png';

class Home extends React.Component {
  public render() {
    return (
      <div className="Home">
        <div className="Home-header">
          <img src={logo} className="Home-logo" alt="logo" />
          <h2>Welcome to Conplement React Boilerplate Project</h2>
        </div>
        <p className="Home-intro">
          To get started, edit <code>src/App.tsx</code> or{' '}
          <code>src/Home.tsx</code> and save to reload.
        </p>
        <p>
          Powered by <a href="https://github.com/jaredpalmer/razzle">Razzle </a> 
          and <a href="https://reactjs.org/">React</a>
        </p>
      </div>
    );
  }
}

export default Home;
