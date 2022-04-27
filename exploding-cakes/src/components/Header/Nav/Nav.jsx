import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
    <nav className="nav">
      <Link to="/" className="nav__element">Home</Link><br/>
      <Link to="/chefs" className="nav__element">PokeChefs</Link><br/>
      <Link to="/about" className="nav__element">About</Link><br/>
      <Link to="/contact" className="nav__element">Contact</Link>
    </nav>
    )
  }
}

export default Nav;
