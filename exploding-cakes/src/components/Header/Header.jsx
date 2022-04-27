import React, { Component } from 'react'
import Nav from "./Nav"
import {userContext} from "../../context/userContext"
import logo from "../../assets/img/logo-cake.png"
import Button from '@mui/material/Button';


export class Header extends Component {
  render() {
    return (
      <header class="header">
        <img src={logo} alt="logo" />
        <Nav/>
        <div className='user'>
        <userContext.Consumer>
          {({user,logout}) =>
              user?
                <>
                  <p>Hola, {user}</p>
                  <Button variant="contained" onClick={logout}>Logout</Button>
                </>:<button>Login(No hace nada)</button>
          }
          </userContext.Consumer>
        </div>
        </header>
    )
  }
}
export default Header
