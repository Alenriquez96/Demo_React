import React, { Component } from 'react'
import ProductItem from './ProductItem'
import dataCakes from "./cakes.json"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export class ProductList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      cakes:dataCakes,
      lastCake:{}  
    }
  }

  addCake = (event) => {
    // const price = prompt("Introduce precio");
    // const name = prompt("Introduce tipo de tarta");
    // alert(`Has añadido una tarta de ${name} y vale ${price}`);
    event.preventDefault();

    const price = event.target.price.value
    const name = event.target.cake.value
    const img = event.target.img.value


    const newCake = {name,price,img};

    //Añadir al estado lastCake el último Cake
    this.setState({lastCake:newCake});  

    //Añadir al estado cake el nuevo cake
    this.setState({cakes:[...this.state.cakes,newCake]})
  }

  paintCakes = () => this.state.cakes.map((cake,i)=> <ProductItem data={cake} key={i} remove={()=>this.removeCake(i)}/>)
  
  
  removeAllCakes=()=>{
    this.setState({cakes:[]})
  }

  resetCakes = () =>{
    this.setState({cakes:dataCakes})    
  }

  removeCake = (i) =>{
    const remainingCakes = this.state.cakes.filter((cake,j)=>i!==j)
    this.setState({cakes:remainingCakes})
  }

  render() {

    const {name,price} = this.state.lastCake;
    return (
      <div>

          <h1>Añadir nueva tarta</h1>
          <form onSubmit={this.addCake} className="form">
            {/* <label htmlFor="cake">Nombre tarta:</label><br/>
            <input type="text" id="cake" name="cake"/><br/>
            <label htmlFor="price">Precio:</label><br/>
            <input type="text" id="price" name="price"/><br/>
            <label htmlFor="img">URL imagen:</label><br/>
            <input type="url" id="img" name="img"/><br/> */}
            <TextField id="outlined-basic" label="Nombre tarta" variant="filled" name='cake'/>
            <TextField id="outlined-basic" label="Precio" variant="filled" name='price'/>
            <TextField id="outlined-basic" label="URL imagen" variant="filled" name='img'/>
            <Button variant="contained" type="submit" className="Button" sx={{margin:1}}>Guardar</Button>
          </form>
          <div className='cake-list'>
            {this.paintCakes()}
          </div>
          <div className='buttons'>
            <Button variant="contained" type="submit" onClick={this.removeAllCakes} className="Button" sx={{margin:1}}>Borrar tartas</Button>
            <Button variant="contained" type="submit" onClick={this.resetCakes} className="Button" sx={{margin:1}}>Recargar tartas</Button>
          </div>
          {/* <button onClick={this.addCake}>Clicka y añade tarta</button>
          <button onClick={this.removeAllCakes}>Borrar tartas</button>
          <button onClick={this.resetCakes}>Recargar tartas</button> */}

          {
          name&&price?
          <p>Última tarta añadida: {name} {price}$</p>
          :""}
      </div>
    )
  }
}

export default ProductList
