import React, { Component } from 'react'
import ProductList from './ProductList'
import Chefs from './Chefs'
import Contact from './Contact'
import Delivery from "./delivery"
import Topics from "./Topics"
import Tasters from "./Tasters"
import { Route, Routes } from 'react-router-dom'

export class main extends Component {
  render() {
    return (
      <main>
          <h1>Futura web - Exploding cakes</h1>
          <Routes>
            <Route element={<ProductList/>} path="/" />
            <Route element={<Chefs/>} path="/chefs" />
            <Route element={<Contact/>} path="/contact"/>
            <Route element={<Delivery/>} path="/delivery"></Route>
            <Route element={<Topics/>} path="/topics"></Route>
            <Route element={<Tasters/>} path="/tasters"/>
          </Routes>
      </main>  
    )
  }
}


export default main
