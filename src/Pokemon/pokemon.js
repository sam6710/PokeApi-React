import { useEffect, useState } from "react";
import './pokemon.css';
import { Link } from "react-router-dom";

function Pokemon(props){

    const [pokemon, setPokemon] = useState()
    const [url, setUrl] = useState(props.url)

    useEffect(() => peticionPokemon(),[]);

    function peticionPokemon(){
        fetch(url)
        .then(response => response.json())
        .then(dataPokemon => {
            // console.log(dataPokemon);
            setPokemon(dataPokemon);
        })
    }

    return(
        <div id="pokemon">
            <p>{pokemon?.id}</p>
            <img src={pokemon?.sprites.front_default} alt={pokemon?.name} />
            <h3>{pokemon?.name}</h3>
            <div id="tipos">
                <h5>Tipos:</h5>
                {
                    pokemon?.types.map((tipo, index) => <span key={index}>{tipo.type.name}</span>)
                }
            </div>
            <Link to={"/detalle/" + pokemon?.name}><button>Detalles</button></Link>
        </div>
    )
}

export default Pokemon;