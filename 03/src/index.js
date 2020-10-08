import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css'


const App = () =>{
  const peliculas = [
  {'titulo':'Inception','poster':'inception.jpg','year':'2010'},
  {'titulo':'Bloodshot','poster':'bloodshot.jpg','year':'2020'},
  {'titulo':'Watchmen: los vigilantes','poster':'watchmen.jpg','year':'2009'},
  {'titulo':'Unbreakable Kimmy Schmidt: Kimmy vs. the Reverend','poster':'unbrakable.jpg','year':2020},
  {'titulo':'Batman: el caballero de la noche asciende','poster':'batman.jpg','year':'2012'},
  {'titulo':'Guardians of the Galaxy Vol. 2','poster':'guardians2.jpg','year':'2017'},
  {'titulo':'El robo del siglo','poster':'robosg.jpg','year':2020}
  ]
  const date = new Date()
  const year = date.getFullYear()
  const year2 = year.toString() 
  const consultadas = peliculas.filter(peli => peli.year === year || peli.year === year2).map((peli,i) => <li key={i}>{peli.titulo}</li>)
  return(
    <div>
       <h1>Las Peliculas del 2020 son:</h1>
      <ul>{consultadas}</ul>
    </div>
  )
  }
  
  ReactDOM.render(<App />,document.getElementById('root'));