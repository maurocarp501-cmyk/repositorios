import { useState } from "react"
import Listado from "./componentes/Listado"
import Formulario from "./componentes/Formulario"
import "./App.css"

const personasDefault = [
    {documento: "12345678", apellidos: "Perez", nombres: "Juan", alumno: true,  año: 1, division: 5},
    {documento: "12345678", apellidos: "Perez", nombres: "Juan", alumno: false, año: 2, division: 6},
    {documento: "12345678", apellidos: "Perez", nombres: "Juan", alumno: true,  año: 3, division: 7},
    {documento: "12345678", apellidos: "Perez", nombres: "Juan", alumno: false, año: 4, division: 8},
]

export default function App() {
  const [personas, setPersonas] = useState(personasDefault)
  
  const guardar = (persona) => {
    console.log(persona)
    setPersonas([...personas, persona])
  }

  return (
    <div className="App">
      <h1>Componente APP</h1>
      <div className="Contenedor">
        <Formulario 
        guardar={(persona) => guardar(persona)}
         />
        <Listado personas={personas} />
      </div>
    </div>
  )
}