import React, { Component } from "react";

/*
    For Handling inputs, two concepts in react come into play; Controlled and Uncontrolled components;
    Uncontrolled Components:
        Input elements are said to be uncontrolled when their value and event changes are handling
        directly by the DOM and all we use react to do is get the value based on the input's ref (ID)
    
    Controlled Components:
        Because React uses one-way data flow, we can capitalize on that and let only react handle the changes to an input component.
        Basically, this means that the 'value' property of the input field will be connected the containing React
        component's state (in our case 'Search' component). And then a function that updates the connected state when there is a chage event
        on the input (It should be clearer when the instructor shows you or you can see the example below)
*/

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
        searchValue: '',
    }
    this.handleSearchInputChanges = this.handleSearchInputChanges.bind(this);
    this.callSearchFunction = this.callSearchFunction.bind(this);
  }

  handleSearchInputChanges(e){
    this.setState({
        searchValue: e.target.value,
    })
  }

  callSearchFunction(){
      this.props.search(this.state.searchValue);
      this.setState({
          searchValue: ''
      })
  }


  render() {
    return (
      <div className="search">
        <input value={this.state.searchValue} onChange={this.handleSearchInputChanges} type="text" />
        <input onClick={this.callSearchFunction} type="button" value="SEARCH" />
      </div>
    );
  }
}

export default Search;
