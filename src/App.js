import './App.css';
import Lista from './listaPokemons/lista';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Landing from './landingPage/landingPage';
import Detalle from './Detalle/detalle';
import Jugar from './jugar/jugar';
import Nav from './nav/nav';
import Footer from './Footer/footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/pokemons" element={<Lista />}></Route>
          <Route path="/detalle/:name" element={<Detalle/>}></Route>
          <Route path="/jugar" element={<Jugar/>}></Route>
          <Route path="*" element={<h1>404</h1>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
