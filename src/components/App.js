import React, { Component } from "react";
import "../App.css";
import Header from "./Header";
import Movie from "./Movie";

/*
  ------- STATE -------
  What is state in a React app? You can think of it as a single JavaScript object which represents all the data in your app.
  State can be defined on any component,
  but if you want to share state between components then it's better to define it on the top-level component.
  State can then be passed down to child components and accessed as required.

  NOTE: For now state can be created like the example below:

  constructor(){
    super();
    this.state = {};
  }
*/

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [
        {
          title: "Ferris Bueller's Day Off",
          year: "1986",
          description:
            "A high school wise guy is determined to have a day off from school, despite what the principal thinks of that.",
          poster:
            "https://m.media-amazon.com/images/M/MV5BYTk3MDljOWQtNGI2My00OTEzLTlhYjQtOTQ4ODM2MzUwY2IwXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg"
        },
        {
          title: "Bridget Jones' Diary",
          year: "2001",
          description:
            "A British woman is determined to improve herself while she looks for love in a year in which she keeps a personal diary.",
          poster:
            "https://m.media-amazon.com/images/M/MV5BYTk3MDljOWQtNGI2My00OTEzLTlhYjQtOTQ4ODM2MzUwY2IwXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg"
        },
        {
          title: "Bridget Jones' Diary",
          year: "2001",
          description:
            "A British woman is determined to improve herself while she looks for love in a year in which she keeps a personal diary.",
          poster:
            "https://m.media-amazon.com/images/M/MV5BYTk3MDljOWQtNGI2My00OTEzLTlhYjQtOTQ4ODM2MzUwY2IwXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg"
        },
        {
          title: "Bridget Jones' Diary",
          year: "2001",
          description:
            "A British woman is determined to improve herself while she looks for love in a year in which she keeps a personal diary.",
          poster:
            "https://m.media-amazon.com/images/M/MV5BYTk3MDljOWQtNGI2My00OTEzLTlhYjQtOTQ4ODM2MzUwY2IwXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg"
        },
        {
          title: "Bridget Jones' Diary",
          year: "2001",
          description:
            "A British woman is determined to improve herself while she looks for love in a year in which she keeps a personal diary.",
          poster:
            "https://m.media-amazon.com/images/M/MV5BYTk3MDljOWQtNGI2My00OTEzLTlhYjQtOTQ4ODM2MzUwY2IwXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg"
        },
        {
          title: "50 First Dates",
          year: "2004",
          description:
            "Henry Roth is a man afraid of commitment up until he meets the beautiful Lucy. They hit it off and Henry think he's finally found the girl of his dreams.",
          poster:
            "https://m.media-amazon.com/images/M/MV5BYTk3MDljOWQtNGI2My00OTEzLTlhYjQtOTQ4ODM2MzUwY2IwXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg"
        },
        {
          title: "Matilda",
          year: "1996",
          description:
            "Story of a wonderful little girl, who happens to be a genius, and her wonderful teacher vs. the worst parents ever and the worst school principal imaginable.",
          poster:
            "https://m.media-amazon.com/images/M/MV5BYTk3MDljOWQtNGI2My00OTEzLTlhYjQtOTQ4ODM2MzUwY2IwXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg"
        }
      ]
    };
  }

  render() {
    return (
      <div className="App">
        <Header text="Samuel's Movie App" />
        <p className="App-intro">Sharing a few of our favourite movies</p>
        <div className="movies">
          {this.state.movies.map((movie, index) => (
            <Movie key={`${index}-${movie.title}`} meta={movie} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
