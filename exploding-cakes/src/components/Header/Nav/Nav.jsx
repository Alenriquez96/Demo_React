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
      <Link to="/delivery" className="nav__element">Delivery</Link>
      <Link to="/topics" className="nav__element">Topics</Link>
      <Link to="/tasters" className="nav__element">Tasters</Link>
    </nav>
    )
  }
}

export default Nav;
