import { useEffect, useState } from "react";
import "./jugar.css";

function Jugar(){

    const [pokemon, setPokemon] = useState([]);
    const [pokeTypes, setPokeTypes] = useState([]);

    useEffect(() => RandomNum(1, 1008),[])

    function RandomNum(min, max){
            let random_num = (Math.floor(Math.random() * (max - min + 1)) + min);
            pokePetition(random_num);
    }

    function pokePetition(num){
        fetch("https://pokeapi.co/api/v2/pokemon/" + num)
            .then((response) => response.json())
            .then((datosPokemon) => {
                setPokemon(datosPokemon)
                setPokeTypes(datosPokemon.types)
                // console.log(datosPokemon)
                // setlistaDefinitiva(listaDefinitiva.concat(pokemon))    
                // console.log(listaDefinitiva)
            })
    }

    function comprobar(e, tipo){
        if(tipo == pokemon.types[0].type.name || tipo == pokemon.types[1].type.name){
            console.log("¡Has acertado!")
            document.getElementById("acierto").style.display = "block";
            document.getElementById("fallo").style.display = "none";
        }
        else{
            console.log("¡Has fallado!")
            document.getElementById("fallo").style.display = "block";
            document.getElementById("acierto").style.display = "none";
        }
    }

    function refrescar(){
        RandomNum(1, 1008);
        document.getElementById("acierto").style.display = "none";
        document.getElementById("fallo").style.display = "none";
    }

    return(
        <div>
            <h1>Jugar</h1>
            <div>
                <div>
                    <div id="pokemon_juego">
                        <p>Aquí debería salir la imagen si a la Api le apeteciera.</p>
                        {/* <img src={pokemon?.sprites.front_default} alt={pokemon?.name} /> */}
                        <h3>{pokemon?.name}</h3>
                    </div>
                </div>
            </div>
            <div id="acierto">
                <h4>¡ACERTASTE! 😺</h4>
            </div>
            <div id="fallo">
                <h4>Fallaste 😿</h4>
            </div>
            <div id="tipos_acertar">
                <h4>Acierta el tipo del pokémon:</h4>
                <button id="tipo_acertar" onClick={(e) => comprobar(e, "bug")}>Bicho</button>
                <button id="tipo_acertar" onClick={(e) => comprobar(e, "dark")}>Oscuridad</button>
                <button id="tipo_acertar" onClick={(e) => comprobar(e, "dragon")}>Dragon</button>
                <button id="tipo_acertar" onClick={(e) => comprobar(e, "electric")}>Eléctrico</button>
                <button id="tipo_acertar" onClick={(e) => comprobar(e, "fairy")}>Hada</button>
                <button id="tipo_acertar" onClick={(e) => comprobar(e, "fighting")}>Lucha</button>
                <button id="tipo_acertar" onClick={(e) => comprobar(e, "fire")}>Fuego</button>
                <button id="tipo_acertar" onClick={(e) => comprobar(e, "flying")}>Volador</button>
                <button id="tipo_acertar" onClick={(e) => comprobar(e, "ghost")}>Fantasma</button>
                <button id="tipo_acertar" onClick={(e) => comprobar(e, "grass")}>Planta</button>
                <button id="tipo_acertar" onClick={(e) => comprobar(e, "ground")}>Tierra</button>
                <button id="tipo_acertar" onClick={(e) => comprobar(e, "ice")}>Hielo</button>
                <button id="tipo_acertar" onClick={(e) => comprobar(e, "normal")}>Normal</button>
                <button id="tipo_acertar" onClick={(e) => comprobar(e, "poison")}>Veneno</button>
                <button id="tipo_acertar" onClick={(e) => comprobar(e, "psychic")}>Psíquico</button>
                <button id="tipo_acertar" onClick={(e) => comprobar(e, "rock")}>Roca</button>
                <button id="tipo_acertar" onClick={(e) => comprobar(e, "steel")}>Acero</button>
                <button id="tipo_acertar" onClick={(e) => comprobar(e, "water")}>Agua</button>
            </div>
            <button id="refresh" onClick={refrescar}>Jugar de nuevo</button>
        </div>
    )
}

export default Jugar;