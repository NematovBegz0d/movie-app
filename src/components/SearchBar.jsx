import React, { Component } from "react";

export default class SearchBar extends Component {
  state = {
    search: "black",
    type: "all",
  };

  handleText = (e) => {
    console.log(e.key);
    if (e.key === "Enter") this.props.searchMovies(this.state.search);
    };
    
    handleCategory = (e) => {
        this.setState({
            type: e.target.dataset.type
        }, () => {
            this.props.searchMovies(this.state.search, this.state.type)
        })
    }
  render() {
    const { search } = this.state;
    return (
      <div className="search">
        <div className="search-bar">
          <input
            type="search"
            name="search"
            required
            autoComplete="off"
            value={search}
            onChange={(e) => {
              this.setState({ search: e.target.value });
            }}
            onKeyUp={this.handleText}
          />
          <button className="search-btn" type="submit">
            <span>Search</span>
          </button>
        </div>
        <div className="selector__container">
          <div className="selector">
            <div className="selector-item">
              <input
                type="radio"
                id="radio1"
                name="selector"
                className="selector-item_radio"
                data-type="movie"
                onChange={this.handleCategory}
                checked={this.state.type === "movie"}
              />
              <label htmlFor="radio1" className="selector-item_label">
                Movies
              </label>
            </div>
            <div className="selector-item">
              <input
                type="radio"
                id="radio2"
                name="selector"
                className="selector-item_radio"
                data-type="all"
                onChange={this.handleCategory}
                checked={this.state.type === "all"}
              />
              <label htmlFor="radio2" className="selector-item_label">
                All
              </label>
            </div>
            <div className="selector-item">
              <input
                type="radio"
                id="radio3"
                name="selector"
                className="selector-item_radio"
                data-type="series"
                onChange={this.handleCategory}
                checked={this.state.type === "series"}
              />
              <label htmlFor="radio3" className="selector-item_label">
                Serials
              </label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
