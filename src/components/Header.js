import React, { Component } from "react";

class Header extends Component {

  render() {
    return (
      <header className="App-header">
        <p>{this.props.title}</p>
        <p>{this.props.count}</p>
      </header>
    );
  }
}

export default Header;