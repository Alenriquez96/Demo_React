import React, { Component } from "react";
import {userContext} from "../../../context/userContext";
import axios from "axios";

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
    const loginUser =   this.context.login//Leer la función login
    loginUser(user);

    const res = await axios.post('https://jsonplaceholder.typicode.com/posts',{user});
    const json = res.data;
    console.log(json);
    // Lo guardo en el estado
    // this.setState(json); // {user,id}
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
