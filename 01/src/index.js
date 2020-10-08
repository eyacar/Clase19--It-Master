import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const paises = [{'pais':'Argentina','capital':'Buenos Aires','continente':'América'},
                {'pais':'España','capital':'Madrid','continente':'Europa'},
                {'pais':'Brasil','capital':'Brasilia','continente':'América'},
                {'pais':'Costa Rica','capital':'San Jose','continente':'América'},
                {'pais':'Japon','capital':'Tokio','continente':'Asia'},
                {'pais':'Nueva Zelanda','capital':'Wellington','continente':'Oceania'},
                {'pais':'Alemania','capital':'Berlín','continente':'Europa'},
                {'pais':'Inglaterra','capital':'Londres','continente':'Europa'}
]

const America = paises.filter(cont => cont.continente === 'América').map((conti,i) => <tr key={i}><td>{conti.pais}</td><td>{conti.capital}</td></tr>)
const Europa = paises.filter(contin => contin.continente === 'Europa').map((contin,i) => <tr key={i}><td>{contin.pais}</td><td>{contin.capital}</td></tr>)

const Thead = (props) => (<th>{props.th}</th>)

const Cabecera = () => (
  <header>
    <table id="t">
    <thead>
      <tr>
      <Thead th="Pais"/>
      <Thead th="Ciudad"/>
      </tr>
    </thead>
<tbody>{America}</tbody>
    </table>
  </header>
)

const Cabecera2 = () => (
  <header>
    <table id="t">
    <thead>
      <tr>
      <Thead th="Pais"/>
      <Thead th="Ciudad"/>
      </tr>
    </thead>
<tbody>{Europa}</tbody>
    </table>
  </header>
)


const App = () =>(
<div>
<h1>America!!!</h1>
<Cabecera />
<h1>Europa!!!</h1>
<Cabecera2 />
</div>
)


ReactDOM.render(<App />,document.getElementById('root'));


