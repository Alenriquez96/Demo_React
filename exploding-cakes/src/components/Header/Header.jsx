import React, { useContext } from 'react'
import Nav from './Nav'
import logo from '../../assets/img/logo-cake.png'
import {userContext} from '../../context/userContext';
import { themeContext } from '../../context/themeContext';
import { Button } from '@mui/material';


export default function Header() {
  const {theme, toggleTheme } = useContext(themeContext) //hook context
  return (
    <header className={`header${theme}`}>
    <img src={logo} alt='logo'></img>
    <Nav/>
      <div className='user'>
      <userContext.Consumer>
      {({user,logout}) =>
        user?
            <>
              <p>Hola, {user}</p>
              <button onClick={logout}>Logout</button>
            </>:""
        }
        </userContext.Consumer>
    <Button variant="contained" color="secondary" onClick={toggleTheme}>Cambiar</Button>
    </div>
   </header>
  )
}
