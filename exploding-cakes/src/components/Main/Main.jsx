import React, { Component } from 'react'
import ProductList from './ProductList'
import Chefs from './Chefs'

export class main extends Component {
  render() {
    return (
      <main>
          <h1>Futura web - Exploding cakes</h1>
          <p>Esto es el main</p>
          <ProductList/>
          <Chefs/>
        </main>
      
    )
  }
}


export default main
