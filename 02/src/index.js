import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const CambiarPelicula = () =>{
const peliculas = ["Inception","500 Days of Summer", "Dark Shadows", "Volver al Futuro"];
const [movies, SetPelicula] = useState(peliculas[0])
const Cambiar = () =>{
  const i = Math.floor(Math.random()*peliculas.length)
  const PeliElegida = peliculas[i]
  SetPelicula(PeliElegida)
};
return[movies, Cambiar] 
};

const App = () =>{
  const [movies, Cambiar] = CambiarPelicula()
  return (
    <div>
      <h1>La Pelicula es: "{movies}"</h1>
      <br />
      <div id="button"><button onClick={Cambiar}>Cambiar la Peli</button></div>
    </div>
  );
}
ReactDOM.render(<App />,document.getElementById('root'));