import { useState } from "react"
import Listado from "./componentes/Listado"
import Formulario from "./componentes/Formulario"
import "./App.css"

const personasDefault = [
    {id: 1, documento: "12345678", apellidos: "Perez", nombres: "Juan", alumno: true,  año: 1, division: 5},
    {id: 2, documento: "12345678", apellidos: "Perez", nombres: "Juan", alumno: false, año: 2, division: 6},
    {id: 3, documento: "12345678", apellidos: "Perez", nombres: "Juan", alumno: true,  año: 3, division: 7},
    {id: 4, documento: "12345678", apellidos: "Perez", nombres: "Juan", alumno: false, año: 4, division: 8},
]

export default function App() {
  const [personas, setPersonas] = useState(personasDefault)
  
  const guardar = (persona) => {
    console.log(persona)
    
    let nuevasPersonas = [...personas];
    nuevasPersonas.push(persona);
    setPersonas(nuevasPersonas);

    
  }
  const eliminar = (persona_id) =>{
    const nuevasPersonas = personas.filter((persona) => persona.id != persona_id)
    console.log(nuevasPersonas);

    setPersonas(nuevasPersonas);
  }
    
  return (
    <div className="App">
      <h1>Componente APP</h1>
      <div className="Contenedor">
        <Formulario 
        guardar={(persona) => guardar(persona)}
         />
        <Listado 
        personas={personas} 
        eliminar={(persona_id)=> eliminar(persona_id)}
        />
      </div>
    </div>
  )
}