import usePersona from "../hooks/usePersona";
import axios from 'axios'
export default function Formulario({}) {
    const [persona, setDatoPersona] = usePersona();


    const hanlderSubmit = (e) => {
        e.preventDefault();

        const url = "https://backend-septimos.ctpoba.edu.ar/api/personas"

        const config = {
            headers: { Authorization: "48191338"}
        }

        axios.post(url, persona, config)
        .then((resp) => {
            console.log(resp)
            alert('Persona guardada')
        })
        .catch((error) => {
            console.error(error)
            alert('error al guardar')
        })
    }
    
    return(
        <div className="Formulario">
            <h1>Componente Formulario</h1>
            <form onSubmit={hanlderSubmit}>
                <input
                    type="text"
                    placeholder="Documento"
                    onChange={(e) => setDatoPersona("documento", e.target.value)}
                    value={persona.documento}
                />

                <input
                    type="text"
                    placeholder="Apellido"
                    onChange={(e) => setDatoPersona("apellidos", e.target.value)}
                    value={persona.apellidos}
                />
                <input
                    type="text"
                    placeholder="Nombre"
                    onChange={(e) => setDatoPersona("nombres", e.target.value)}
                    value={persona.nombres}
                />
                <input
                    type="text"
                    placeholder="Año"
                    onChange={(e) => setDatoPersona("anio", e.target.value)}
                    value={persona.anio}
                />
                <input
                    type="text"
                    placeholder="Division"
                    onChange={(e) => setDatoPersona("division", e.target.value)}
                    value={persona.division}
                />

                <select
                    onChange={(e) => setRol("Rol",e.target.value)}
                    value={persona.rol}
                >
                    <option value="alumno">Alumno</option>
                    <option value="docente">Docente</option>
                </select>
                <button type="submit">Guardar</button>
            </form>
        </div>
    )
}
