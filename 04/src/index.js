import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const App = () =>{
const [azar, Tirar] = useState([]);
const [img, Imagen] = useState();
const Random = () =>{
  
  const dados=[]
  const dado1= Math.ceil(Math.random()*6)
  dados.push(dado1)
  const dado2= Math.ceil(Math.random()*6)
  dados.push(dado2)
Imagen('http://www.faggella.com/gif/juegos/cartas%20dados/dados.gif')
if (dado1 > dado2){dados.push('Gano Dado 1')}
else if(dado2 > dado1){dados.push('Gano Dado 2')}
else{dados.push('Empataron')}
Tirar(dados)
}
return(
<div>
<header>
<h1>Proba tu suerte!!!</h1>
<div id="boton">
<button onClick={Random}>"Proba tu suerte"</button>
<img src={img} alt=""/>
</div>
</header>
<h1>Dado 1:{azar[0]}</h1>
<h1>Dado 2:{azar[1]}</h1>
<h1>Quien tuvo mas suerte?:{azar[2]}</h1>
</div>
)
}

ReactDOM.render(<App />,document.getElementById('root'));