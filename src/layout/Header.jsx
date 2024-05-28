import React, { Component } from "react";
import playIcon from "../imgs/playicon.png"

class Header extends Component {
  render() {
    return (
      <header>
        <div className="header__nav">
          <a className="breand__logo" href="#!">
            Creative Movies App
          </a>
          <ul>
            <li>
              <a href="#!">Movies</a>
            </li>
            <li>
              <a href="#!">Serials</a>
            </li>
            <li>
              <a href="#!">Logout</a>
            </li>
          </ul>
        </div>

        <div className="main-header">
          <a href="#!">
            <img src={playIcon} alt="" />
          </a>
        </div>
      </header>
    );
  }
}
export default Header;
