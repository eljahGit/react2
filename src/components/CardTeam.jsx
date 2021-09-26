import {Link} from 'react-router-dom'
function CardTeam({ equipo, imagen }) {
    return (
        <li className='tarjetaEquipo'>
            <Link to="/argentina">
            <div className='contenedorImagen'> 
            <img src={imagen} alt={equipo} />
            </div>
            </Link>
            <span className='tituloTarjeta'>{equipo}</span>
        </li>
    );
}
    export default CardTeam;