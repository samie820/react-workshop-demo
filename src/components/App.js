import React, { Component } from "react";
import "../App.css";
import Header from "./Header";
import Movie from "./Movie";
import spinner from "../ajax-loader.gif";
import Search from "./Search";

/*
  ------- USER EVENTS -------
  Handling user events is one of our favourite features in that ReaactJS helps
  in simplifying.
  In Vanilla JS we usually had to handle user inputs by listening for events
  e.g.
  const buttonVariable = document.getElementById('button-id);
  buttonVariable.onclick = function(e){
    // run your function
  }

  In React we can just attach the function to the onClick event handler directly as you will see below
*/

const MOVIE_API_URL = "http://www.omdbapi.com/?s=man&apikey=4a3b711b";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      movies: [],
      errorMessage: null
    };

    this.search = this.search.bind(this);
  }

  componentDidMount() {
    fetch(MOVIE_API_URL)
      .then(response => response.json())
      .then(jsonResponse => {
        this.setState({
          movies: jsonResponse.Search,
          loading: false
        });
      });
  }

  search(searchValue) {
    this.setState({
      loading: true,
      errorMessage: null
    });

    fetch(`http://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`)
      .then(response => response.json())
      .then(jsonResponse => {
        if (jsonResponse.Response === "True") {
          this.setState({
            movies: jsonResponse.Search,
            loading: false
          });
        } else {
          this.setState({
            loading: false,
            errorMessage: jsonResponse.Error
          });
        }
      });
  }

  render() {
    return (
      <div className="App">
        <Header text="Samuel's Movie App" />
        <Search search={this.search} />
        <p className="App-intro">Sharing a few of our favourite movies</p>
        <div className="movies">
          {this.state.loading && !this.state.errorMessage ? (
            <img className="spinner" src={spinner} alt="Loading spinner" />
          ) : this.state.errorMessage ? (
            <div className="errorMessage">{this.state.errorMessage}</div>
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
