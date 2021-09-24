import './styles/estilos.css';
import conmebol from './media/conmebol.png';
import arg from './media/arg.jpg';
import bol from './media/bol.webp';
import bra from './media/bra.png';
import chi from './media/chi.webp';
import col from './media/col.webp';
import ecu from './media/ecu.png';
import par from './media/par.jpg';
import per from './media/per.png';
import uru from './media/uru.webp';
import ven from './media/ven.webp';
function App() {
  return (
    <div className="App">
      <header>
        <ul className="navbar">
          <li>
            <img src={conmebol} alt="imagen_conmebol" className="logo"/>
          </li>
          <li>
            <button className="button mainButton">+ Nuevo Post</button>
          </li>
          <li>
            <div className="buscar">
              <input placeholder="Buscar"/>
              <i className ="fas fa-search button iconobusqueda"></i>
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
            <li className="tarjetaEquipo">
              <div className="contenedorImagen">            
                <img src={arg} alt="afa"/>
              </div>
              <span className="tituloTarjeta">
                Argentina
              </span>
            </li>
            <li className="tarjetaEquipo">
              <div className="contenedorImagen">
                <img src={bra} alt="cbf"/>
              </div>
              <span className="tituloTarjeta">
                Brasil
              </span>
            </li>
            <li className="tarjetaEquipo">
              <div className="contenedorImagen">
                <img src={bol} alt="fbf"/>
              </div>
              <span className="tituloTarjeta">
                Bolivia
              </span>
            </li>
            <li className="tarjetaEquipo">
              <div className="contenedorImagen">
                <img src={chi} alt="acf"/>
              </div>
              <span className="tituloTarjeta">
                Chile
              </span>
            </li>
            <li className="tarjetaEquipo">
              <div className="contenedorImagen">
                <img src={col} alt="fcf"/>
              </div>
              <span className="tituloTarjeta">
                Colombia
              </span>
            </li>
            <li className="tarjetaEquipo">
              <div className="contenedorImagen">
                <img src={ecu} alt="fef"/>
              </div>
              <span className="tituloTarjeta">
                Ecuador
              </span>
            </li>
            <li className="tarjetaEquipo">
              <div className="contenedorImagen">
                <img src={par} alt="apf"/>
              </div>
              <span className="tituloTarjeta">
                Paraguay
              </span>
            </li>
            <li className="tarjetaEquipo">
              <div className="contenedorImagen">
                <img src={per} alt="fpf"/>
              </div>
              <span className="tituloTarjeta">
                Perú
              </span>
            </li>
            <li className="tarjetaEquipo">
              <div className="contenedorImagen">
                <img src={uru} alt="auf"/>
              </div>
              <span className="tituloTarjeta">
                Uruguay
              </span>
            </li>
            <li className="tarjetaEquipo">
              <div className="contenedorImagen">
                <img src={ven} alt="fvf"/>
              </div>
              <span className="tituloTarjeta">
                Venezuela
              </span>
            </li>
          </ul>
        </section>
        <section></section>
      </main>
      <footer>2021 Contacto: alguien@outlook.com </footer>
    </div>
  );
}

export default App;
