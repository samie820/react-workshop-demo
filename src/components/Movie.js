import React, { Component } from "react";

class Movie extends Component {
  render() {
    return (
      <div className="movie">
        <h2>{this.props.title}</h2>
        <div>
          <img width="200" alt={`The movie titled: ${this.props.title}`} src={this.props.poster} />
        </div>
        <p>({this.props.year})</p>
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default Movie;
