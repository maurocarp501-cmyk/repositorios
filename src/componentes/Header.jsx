import { Link } from "wouter";

export default function header(){
    return(
        <div className="wouter">
            <Link className="opcion" href="/">Inicio</Link>
            <Link className="opcion" href="/nueva">Nueva persona</Link>
            <Link className="opcion" href="/Listado">Listado</Link>
        </div>
    )
}