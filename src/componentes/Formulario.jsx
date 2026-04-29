import { useState } from "react";

export default function Formulario({guardar}){
    const [documento, setDocumento] = useState("");
    const [apellidos, setApellidos] = useState("");
    const [nombres, setNombres] = useState("");
    const [año, setAño] = useState("");
    const [division, setDivision] = useState("");
    const [rol, setRol] = useState("alumno");

    const handlerSubmit = (e) => {
        e.preventDefault();
        console.log({documento, apellidos, nombres, rol, año, division});

        const alumno= rol === "alumno";

        const persona = {
            documento,
            apellidos,
            nombres,
            alumno,
            division,
            año
        }
        guardar(persona);
    }

    return (
        <div className="Formulario">
            <h1>Componente Formulario</h1>
            <form onSubmit={handlerSubmit}>
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
                    value={apellidos}
                />
                <input
                    type="text"
                    placeholder="Nombres"
                    onChange={(e) => setNombres(e.target.value)}
                    value={nombres}
                />
                <select onChange={(e) => setRol(e.target.value)} value={rol}>
                    <option value="alumno">Alumno</option>
                    <option value="docente">Docente</option>
                </select>
                <select onChange={(e) => setAño(e.target.value)} value={año}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <select onChange={(e) => setDivision(e.target.value)} value={division}>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                </select>
                <button type="submit">Guardar</button>
            </form>
        </div>
    )
}