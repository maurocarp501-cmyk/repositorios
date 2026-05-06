import usePersona from "../hooks/usePersona";

export default function Formulario({guardar}){
    const [persona, setDatoPersona] = usePersona();
    
    const handlerSubmit = (e) => {
        e.preventDefault();
       

        const alumno= persona.rol == "alumno";

       const id= (new Date()).getTime();

        guardar({...persona, alumno, id});

        
    }

    return (
        <div className="Formulario">
            <h1>Componente Formulario</h1>
            <form onSubmit={handlerSubmit}>
                <input
                    type="text"
                    placeholder="Documento"
                    onChange={(e) => setDatoPersona("documento",e.target.value)}
                    value={persona.documento}
                />
                <input
                    type="text"
                    placeholder="Apellidos"
                    onChange={(e) => setDatoPersona("apellidos",e.target.value)}
                    value={persona.apellidos}
                />
                <input
                    type="text"
                    placeholder="Nombres"
                    onChange={(e) => setDatoPersona("nombres",e.target.value)}
                    value={persona.nombres}
                />
                <select onChange={(e) => setDatoPersona("rol",e.target.value)} value={persona.rol}>
                    <option value="alumno">Alumno</option>
                    <option value="docente">Docente</option>
                </select>
                <select onChange={(e) => setDatoPersona("año",e.target.value)} value={persona.año}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <select onChange={(e) => setDatoPersona("division",e.target.value)} value={persona.division}>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                </select>
                <button type="submit">Guardar</button>
            </form>
        </div>
    )
}