import { useState, useEffect } from "react"
import { Router, Route, Switch } from 'wouter'
import axios from 'axios'
import Listado from "./componentes/Listado"
import Formulario from "./componentes/formulario"
import Header from "./componentes/Header"
import "./App.css"

export default function App() {

  return (
  <div className="App">
    <Header />
    <Router>
      <Switch>
          <Route path="/nueva">
            <Formulario /> 
          </Route>
          <Route path="/listado">
            <Listado />
          </Route>
          <Route path="/">
            <h1>Componente APP</h1>
          </Route>
          <Route>
            <h1>Pagina no encontrada</h1>
          </Route>
      </Switch>
    </Router>

    </div>
  )
  }