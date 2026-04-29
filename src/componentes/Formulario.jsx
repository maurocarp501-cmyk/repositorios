import { useState } from "react";

export default function Formulario(){
    const [documento, setDocumento] = useState("");
    const [Apellidos, setApellidos] = useState("");
    const [nombres, setNombres] = useState("");
    const [Rol, setRol] = useState("");

    const hanldersubmit = (e) => {
        e.preventDefault();
        console.log({documento, Apellidos, nombres, Rol})
    }

    return (
        <div className="Formulario">
            <h1>componente Formulario</h1>
            <form onSubmit={hanldersubmit}>
                <input
                type="text"
                placeholder="Documento"
                onChange={(e) => setDocumento(e.target.value)}
                value={documento}
                />

                <input
                type="text"
                placeholder="Apellidos"
                  onChange={(e) => setApellidos(e.target.value)}
                value={Apellidos}
                />

                <input
                type="text"
                placeholder="Nombres"
                  onChange={(e) => setNombres(e.target.value)}
                value={nombres}
                />
                <select
                     onChange={(e) => setRol(e.target.value)}
                value={Rol}
>
                    <option value="alumno">alumno</option>
                    <option value="Documento">Documento</option>
                </select>
                <button type="submit">guardar</button>
                
            </form>
        </div>
    )
}