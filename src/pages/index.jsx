import CardTeam from 'components/CardTeam';
import conmebol from 'media/conmebol.png';
import arg from 'media/arg.jpg';
import bol from 'media/bol.webp';
import bra from 'media/bra.png';
import chi from 'media/chi.webp';
import col from 'media/col.webp';
import ecu from 'media/ecu.png';
import par from 'media/par.jpg';
import per from 'media/per.png';
import uru from 'media/uru.webp';
import ven from 'media/ven.webp';

function Index(){
    return (
    <div> <header>
        <ul className="navbar">
            <li>
                <img src={conmebol} alt="imagen_conmebol" className="logo" />
            </li>
            <li>
                <button className="button mainButton">+ Nuevo Post</button>
            </li>
            <li>
                <div className="buscar">
                    <input placeholder="Buscar" />
                    <i className="fas fa-search button iconobusqueda"></i>
                </div>
            </li>
            <li><button className="button secondaryButton">Iniciar Sesión</button></li>
            <li><button className="button mainButton">Registrarme</button></li>
        </ul>
    </header>
        <main>
            <section>
                <h1>EQUIPOS DE SUDAMERICA</h1>

                <ul className="contenedorEscudos">
                    <CardTeam equipo='Argentina' imagen={arg} />
                    <CardTeam equipo='Bolivia' imagen={bol} />
                    <CardTeam equipo='Brasil' imagen={bra} />
                    <CardTeam equipo='Chile' imagen={chi} />
                    <CardTeam equipo='Colombia' imagen={col} />
                    <CardTeam equipo='Ecuador' imagen={ecu} />
                    <CardTeam equipo='Paraguay' imagen={par} />
                    <CardTeam equipo='Peru' imagen={per} />
                    <CardTeam equipo='Uruguay' imagen={uru} />
                    <CardTeam equipo='Venezuela' imagen={ven} />

                </ul>
            </section>
            <section></section>
        </main>
        <footer>2021 Contacto: alguien@outlook.com </footer></div>
    );
}

export default Index;
