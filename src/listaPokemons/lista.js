import React, {useState, useEffect} from 'react';
import './lista.css';
import Pokemon from '../Pokemon/pokemon';

function Lista(){
    const [listaPokemons, setlistaPokemons] = useState([]);
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon?limit=9");

    useEffect(() => cargarNueve(),[]);

    function cargarNueve(){
        fetch(url)
        .then((response) => response.json())
        .then((datosApi) => {
            setlistaPokemons(listaPokemons.concat(datosApi.results))
            setUrl(datosApi.next)
            // console.log("Petición")
        });
    }

    return(
        <div id="seccion_lista">
            <h1>Lista de Pokémons</h1>
            <ul id="lista">
                {
                    listaPokemons.map((pokemon, index) => <Pokemon key={index} url={pokemon.url} />)
                    // return <li key={pokemon.name}>{pokemon.name}</li>
                }
            </ul>
            <button onClick={cargarNueve}>Cargar más</button>
        </div>
    )
}

export default Lista;