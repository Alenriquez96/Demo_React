import React, { Component } from 'react'
import ProductItem from './ProductItem'

export class ProductList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      cakes:[
          {name:"Limón", price:5},
          {name:"Queso", price:3, company: "Sargento de queso SA"},
          {name:"Fresa", price:4, company:"Esequesite SA"}
      ],
      lastCake:{}  
    }
  }

  addCake = () => {
    const price = prompt("Introduce precio");
    const name = prompt("Introduce tipo de tarta");
    // alert(`Has añadido una tarta de ${name} y vale ${price}`);

    //Añadir al estado lastCake el último Cake
    const newCake = {name,price};
    this.setState({lastCake:newCake});  
  }

  render() {
    let cakes = this.state.cakes;
    const {name,price} = this.state.lastCake;
    return (
      <div>
          <ProductItem data={cakes[0]}/>
          <ProductItem data={cakes[1]}/>
          <ProductItem data={cakes[2]}/>
          <button onClick={this.addCake}>Clicka y añade tarta</button>
          {
          name&&price?
          <p>Última tarta añadida: {name} {price}$</p>
          :""}
      </div>
    )
  }
}

export default ProductList
