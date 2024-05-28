import React, { Component } from "react";
import Movies from "../components/Movies";
import SearchBar from "../components/SearchBar";

class Main extends Component {
  state = {
    movies: [],
    dataLength: null,
  };

  componentDidMount() {
    fetch("https://www.omdbapi.com/?i=tt3896198&apikey=a9b8ed91&s=black")
      .then((response) => response.json())
      .then((date) =>
        this.setState({
          movies: date.Search,
          dataLength: date.totalResults,
        })
      );
    console.log(this.state.dataLength);
  }

  searchMovies = (text, type = "all") => {
    fetch(
      `https://www.omdbapi.com/?i=tt3896198&apikey=a9b8ed91&s=${text}${
        type !== "all" ? `&type=${type}` : ""
      }`
    )
      .then((response) => response.json())
      .then((date) =>
        this.setState({
          movies: date.Search,
          dataLength: date.totalResults,
        })
      );
  };

  render() {
    return (
      <div className="container">
        <SearchBar searchMovies={this.searchMovies} />
        <Movies movies={this.state.movies} />
      </div>
    );
  }
}

export default Main;
