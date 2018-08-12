import React, { Component } from 'react';

import Routes from './routes/Routes';
import NavBar from './ui/NavBar/NavBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />  
        <Routes />
      </div>
    );
  }
}

export default App;
