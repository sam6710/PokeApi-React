import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './detalle.css';


function Detalle(){

    const {name} = useParams();

    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/" + name);
    const [datos, setDatos] = useState();

    useEffect (() => peticionPorNombre(),[]);

    function peticionPorNombre(){
        fetch(url)
        .then(response => response.json())
        .then(dataPokemon => {
            // console.log(dataPokemon);
            setDatos(dataPokemon);
        })
    }

    return(
        <div id="detalle">
            <div id="fotos">
                <h1>{datos?.name}</h1>
                <div id="imagenes">
                <h5>Imágenes:</h5>
                    <div id="default">
                        <img src={datos?.sprites.front_default} alt={datos?.name} />
                        <img src={datos?.sprites.back_default} alt={datos?.name} />
                        <img src={datos?.sprites.front_female} alt={datos?.name} />
                        <img src={datos?.sprites.back_female} alt={datos?.name} />
                    </div>
                    <div id="shiny">
                        <img src={datos?.sprites.front_shiny} alt={datos?.name} />
                        <img src={datos?.sprites.back_shiny} alt={datos?.name} />
                        <img src={datos?.sprites.front_shiny_female} alt={datos?.name} />
                        <img src={datos?.sprites.back_shiny_female} alt={datos?.name} />
                    </div>
                </div>
            </div>
            <div id="data">
                <div class="stats" id="datos">
                    <h5>Altura:</h5>
                    <p>{datos?.height} dm</p>
                    <h5>Peso:</h5>
                    <p>{datos?.weight} hg</p>
                </div>
                <div class="stats" id="tipos">
                    <h5>Tipos:</h5>
                    {
                        datos?.types.map((tipo, index) => <span key={index}>{tipo.type.name}</span>)
                    }
                </div>
                <div class="stats" id="habilidades">
                    <h5>Habilidades:</h5>
                    {
                        datos?.abilities.map((habilidad, index) => <span key={index}>{habilidad.ability.name}</span>)
                    }
                </div>
                <div class="stats" id="stats">
                    <h5>Stats:</h5>
                    {
                        datos?.stats.map((stat, index) => <span key={index}>{stat.stat.name}: {stat.base_stat}</span>)
                    }
                </div>  
            </div>          
        </div>
    )
}

export default Detalle;