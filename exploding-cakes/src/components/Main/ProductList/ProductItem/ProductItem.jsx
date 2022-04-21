import React, { Component } from 'react'

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
    const {name,price}=this.props.data

    return (
      <div>
          <h4>Tarta de {name}</h4>
          <p>Precio:{price}$</p>
          <p>Companía: {this.state.company}</p>
      </div>
    )
  }
}

export default ProductItem
