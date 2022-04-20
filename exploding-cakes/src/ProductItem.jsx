import React, { Component } from 'react'

export class ProductItem extends Component {
  render() {
    return (
      <div>
          <p>Tarta de {this.props.name}</p>
          <p>Precio:{this.props.price}$</p>
      </div>
    )
  }
}

export default ProductItem