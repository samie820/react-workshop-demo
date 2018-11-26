import React, { Component } from 'react';
import '../App.css';
import Header from './Header';

/*
    ------ PROPS -------
    When it comes to passing string props, there are many ways to do it, but for the sake if this workshop we will
    Only work on two methods

    METHOD 1: (Directly)
        e.g. <Header text="direct string" />
    
    METHOD 2: (Using a variable)
        render(){
            const headerText = "Header String";
            return (
                <Header text={headerText} />
            )
        }
    
    For number props we can pass it as:
        e.g <Header numberProps={10} />
    
    For boolean props we can pass it like this:
        e.g. <Header booleanProps={true} />
            OR
            <Header booleanProps={false} />
    
    For object props we can pass them like this:
        e.g. <Header objectProps={{
            key: value
        }}
*/

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header text="Samuel's Movie App" />
        <p className="App-intro">
          Welcome to the 'Movie Mojo' React app!
        </p>
      </div>
    );
  }
}

export default App;
