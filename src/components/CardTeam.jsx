
function CardTeam({ equipo, imagen }) {
    return (
        <li className='tarjetaEquipo'>
            <div className='contenedorImagen'>
                <img src={imagen} alt={equipo} />
            </div>
            <span className='tituloTarjeta'>{equipo}</span>
        </li>
    );
}
    export default CardTeam;