import React, { Component } from 'react'
import "./ProductItem.css"

export class ProductItem extends Component {
  //rconst
  constructor(props) {
    super(props)
  
    this.state = {
       company: this.props.data.company ||   "Cat Cake SA"
    }
  }
  render() {
    //Destructuring
    const {name,price,img}=this.props.data

    return (
      <div>
          <h4>Tarta de {name}</h4>
          <p>Precio:{price}$</p>
          <p>Companía: {this.state.company}</p>
          <img className='cake' src={img} alt="tarta" /><br />
          <button onClick={this.props.remove}>Borrar una tarta</button>
      </div>
    )
  }
}

export default ProductItem
