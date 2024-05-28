import React, { Component } from "react";
import Movie from "./Movie";

class Movies extends Component {
  render() {
    const { movies = [] } = this.props;
    return (
      <div className="movies">
        {movies.length ? (
          movies.map((movie) => <Movie key={movie.imdbID} {...movie} />)
        ) : (
          <div className="content">
            <div className="font-404">
              <h1>
                4<span>0</span>4
              </h1>
            </div>
            <p>
              The page you are looking for might have been removed, its URL
              changed or is temporarily unavailable.
            </p>
            <a href="#?">home page</a>
          </div>
        )}
      </div>
    );
  }
}
export default Movies;
