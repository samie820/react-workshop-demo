import React, { Component } from "react";
import "../App.css";
import Header from "./Header";
import Movie from "./Movie";
import spinner from '../ajax-loader.gif'

/*
  ------- LIFECYCLE -------
  Since we have adopted the use of components in React,
  every component we create has a lifecycle that React helps us plug into
  i.e. we can plug into different points in the life of a component and perform functions

  For more on this read: https://blog.pusher.com/beginners-guide-react-component-lifecycle/

  The two component lifecycles we will treat are:
  componentDidMount and componentWillUnmount

  componentDidMount: is a lifeycle in which the component has been added to the browser's DOM
  and can now interact with other elements in the DOM tree. THis is commonly where you will want
  to handle any DOM interaction like Animations or make an async network request or create a setInterval/setTimeout
  function

  componentWillUnmount: is a lifecyclein which the component is about to be removed from the DOM and all interactions
  with that component must seize. This is where you will want to remove any event listener and clear any timeout that was 
  setin order to prevent memory leaks
*/

const MOVIE_API_URL = 'http://www.omdbapi.com/?s=man&apikey=4a3b711b';

class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      movies: []
    };
  }

  componentDidMount(){
    fetch(MOVIE_API_URL)
    .then(response => response.json())
    .then(jsonResponse => {
      this.setState({
        movies: jsonResponse.Search,
        loading: false,
      })
    })
    .catch(error => {
      console.log(error);
      this.setState({
        loading: false,
      })
    })
  }

  render() {
    return (
      <div className="App">
        <Header text="Samuel's Movie App" />
        <p className="App-intro">Sharing a few of our favourite movies</p>
        <div className="movies">
          {this.state.loading ? (
            <img className="spinner" src={spinner} alt='Loading spinner' />
          ) : (
            this.state.movies.map((movie, index) => (
              <Movie key={`${index}-${movie.Title}`} meta={movie} />
            ))
          )}
        </div>
      </div>
    );
  }
}

export default App;
