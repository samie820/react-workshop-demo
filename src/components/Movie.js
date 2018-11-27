import React, { Component } from "react";

const DEFAULT_PLACEHOLDER_IMAGE = "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";

class Movie extends Component {
  render() {
    const poster = this.props.meta.Poster === 'N/A' ? DEFAULT_PLACEHOLDER_IMAGE : this.props.meta.Poster
    return (
      <div className="movie">
        <h2>{this.props.meta.Title}</h2>
        <div>
          <img width="200" alt={`The movie titled: ${this.props.meta.Title}`} src={poster} />
        </div>
        <p>({this.props.meta.Year})</p>
      </div>
    );
  }
}

export default Movie;
