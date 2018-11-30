import React, { Component } from 'react';
import '../App.css';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="ABOUT" count={2} />
        <Header title="SERVICES" count={4} />
      </div>
    );
  }
}

export default App;
