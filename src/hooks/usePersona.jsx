import { useState } from "react";

export default function usePersona(){
    
    const [documento, setDocumento] = useState("");
    const [apellidos, setApellidos] = useState("");
    const [nombres, setNombres] = useState("");
    const [año, setAño] = useState("");
    const [division, setDivision] = useState("");
    const [rol, setRol] = useState("alumno");

const cambiarDato= (campo, valor) =>{
    const opciones= {
        documento: (valor) => setDocumento(valor),
        apellidos:(valor) => setApellidos(valor),
        nombres: (valor) => setNombres(valor),
        rol: (valor) => setRol(valor),
        division: (valor) => setDivision(valor),
        año: (valor) => setAño (valor)
    }

    opciones[campo](valor);
}

    return [
        {documento, apellidos, nombres, rol, division, año},
        cambiarDato
    ]
}