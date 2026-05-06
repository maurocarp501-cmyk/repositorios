export default function Tarjeta({documento, nombres, apellidos, alumno, año, division, eliminar}) {
    return(
        <div 
            className="Tarjeta"
            style={{backgroundColor: alumno ? "aquamarine" : "blueviolet",
                color: alumno ? "black" : "white"

            }}
        >
            <span
               className="Eliminar"
               onClick={() => eliminar()}
            >X </span>
            <h2>{documento}</h2>
            <h3>{apellidos}, {nombres}</h3>
            <h4>{division}, {año}</h4>
        </div>
    )
}