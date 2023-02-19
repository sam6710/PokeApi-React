import "./landing.css";

function Landing(){
    return(
    <>
        <h1>PokePage</h1>
        <div id="landing">
            <div id="PokePage">
                <div id="info">
                <h2>¿Qué es PokePage?</h2>
                <p>PokePage es una página web que te permite consultar información sobre tus Pokémon favoritos. Sus tipos, nombres, evoluciones y muchas más.</p>
                </div>
            </div>
            <div id="juego">
                <h2>¿Quieres jugar?</h2>
                <p>Si quieres jugar, entra en la sección de "Jugar" y prueba a adivinar el tipo de Pokémon que te aparece.</p>
                <img src={require("../imagenes/tipos.png")}></img>
            </div>
            <div id="section_final">
                <div id="hecho">
                    <h3>Hecho con:</h3>
                    <img src={require("../imagenes/pokeapi.png")}></img>
                </div>
                <img id="pokeball_img" src={require("../imagenes/pokeball.png")}></img>
            </div>
        </div>
    </>)
}

export default Landing;