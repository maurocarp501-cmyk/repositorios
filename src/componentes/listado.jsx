import { useState, useEffect } from "react"
import axios from 'axios'
import Tarjeta from "./Tarjeta";

export default function Listado() {
  const [personas, setPersonas] = useState([])


  const actualizar = () => {
    const url = 'https://backend-septimos.ctpoba.edu.ar/api/personas';
    const config = {
      headers: { Authorization: "48191338" }
    }

    axios.get(url, config)
      .then((resp) => {
        console.log(resp)
        setPersonas(resp.data.personas)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  
  useEffect(() => {
    actualizar();
  }, [])


  const eliminar = (persona_id) => {
    const url = `https://backend-septimos.ctpoba.edu.ar/api/personas/${persona_id}`
    const config = {
      headers: { Authorization: "48191338" }
    }

    axios.delete(url, config)
      .then((resp) => {
        console.log(resp.data)
        alert("se elimino la persona")
      })
      .catch((error) => {
        console.error(error)
      })
      .finally(() => {
        actualizar(); 
      })
  }

  return (
    <div style={{ flex: 3 }}> 
      <h1>Componente Listado</h1>
      <div className="Listado">
        {personas && personas.map((persona, index) => (
          <Tarjeta 
            key={persona.id}
            documento={persona.documento}
            apellidos={persona.apellidos}
            nombres={persona.nombres}
            alumno={persona.alumno}
            curso={persona.curso}
            division={persona.division}
            eliminar={() => eliminar(persona.id)}
          />
        ))}
      </div>
    </div>
  )
}
