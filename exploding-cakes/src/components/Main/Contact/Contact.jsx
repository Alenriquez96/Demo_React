import React, { Component } from "react";
import {userContext} from "../../../context/userContext"

class Contact extends Component {
  static contextType = userContext;
  constructor(props) {
    super(props)
  
    this.state = {
       user:""
    }
  }   

  login = (event) => {
    event.preventDefault();

    const user = event.target.user.value
    alert(user)
    this.setState({user});
    const loginUser = this.context.login//Leer la función login
    loginUser(user)
  }
  render() {
    return (
      <div>
          <h1>Contacto</h1>
          <form onSubmit={this.login}>
            <label htmlFor="user">Nombre Usuario:</label><br/>
            <input type="text" id="user" name="user"/><br/>
            <input type="submit" value="Enviar" />
          </form>
          <p>Usuario introducido: {this.state.user?this.state.user:"--"}</p>  
      </div>
          )
        }
      }



export default Contact;
