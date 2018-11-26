import React, { Component } from "react";
import "../App.css";
import Header from "./Header";
import Movie from "./Movie";

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
        <p className="App-intro">Sharing a few of our favourite movies</p>
        <div className="movies">
          <Movie
            title="50 First Dates"
            year="2004"
            description="Henry Roth is a man afraid of commitment up until he meets the beautiful Lucy. They hit it off and Henry think he's finally found the girl of his dreams."
            poster="https://m.media-amazon.com/images/M/MV5BYTk3MDljOWQtNGI2My00OTEzLTlhYjQtOTQ4ODM2MzUwY2IwXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg"
          />
          <Movie
            title="Ferris Bueller's Day Off"
            year="1986"
            description="A high school wise guy is determined to have a day off from school, despite what the principal thinks of that."
            poster="https://m.media-amazon.com/images/M/MV5BYTk3MDljOWQtNGI2My00OTEzLTlhYjQtOTQ4ODM2MzUwY2IwXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg"
          />
          <Movie
            title="Matilda"
            year="1996"
            description="Story of a wonderful little girl, who happens to be a genius, and her wonderful teacher vs. the worst parents ever and the worst school principal imaginable."
            poster="https://m.media-amazon.com/images/M/MV5BYTk3MDljOWQtNGI2My00OTEzLTlhYjQtOTQ4ODM2MzUwY2IwXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg"
          />
          <Movie
            title="Dirty Dancing"
            year="1987"
            description="Spending the summer at a Catskills resort with her family, Frances 'Baby' Houseman falls in love with the camp's dance instructor, Johnny Castle."
            poster="https://m.media-amazon.com/images/M/MV5BYTk3MDljOWQtNGI2My00OTEzLTlhYjQtOTQ4ODM2MzUwY2IwXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg"
          />
        </div>
      </div>
    );
  }
}

export default App;
