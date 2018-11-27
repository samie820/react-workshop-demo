import React, { Component } from "react";

class Movie extends Component {
  render() {
    return (
      <div className="movie">
        <h2>{this.props.meta.Title}</h2>
        <div>
          <img width="200" alt={`The movie titled: ${this.props.meta.Title}`} src={this.props.meta.Poster} />
        </div>
        <p>({this.props.meta.Year})</p>
      </div>
    );
  }
}

export default Movie;
