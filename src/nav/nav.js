import {Link} from 'react-router-dom';
import './nav.css';

function Nav(){
    return(<>
        <nav class="navbar navbar-expand-lg bg-primary">
            <div class="container-fluid">
                <a id='PokeLogoA' class="nav-link active" aria-current="page" href="/"><img id="PokeLogo" src={require("../imagenes/pokemon.png")}></img></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link to="/"><a class="nav-link active" aria-current="page" href="/">Inicio</a></Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/pokemons"><a class="nav-link active" href="/pokemons">Pokemons</a></Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/jugar"><a class="nav-link active" href="/jugar">Jugar</a></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>)
}

export default Nav;