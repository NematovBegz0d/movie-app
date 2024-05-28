import { Component } from "react";
import playIcon from "../imgs/playicon.png";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="main-foot">
          <a href="#!">
            <img src={playIcon} alt="" />
          </a>
        </div>
        <footer className="page__footer">
          <div className="footer__copyright">
            <div className="container">
              <h3>&copy; {new Date().getFullYear()} Copyright Reserved</h3>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
