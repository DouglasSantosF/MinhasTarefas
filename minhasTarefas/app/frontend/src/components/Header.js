import {React, useState, useContext} from 'react';
import listaContext from '../context';


const Header = () => {

  const { listaApi, tarefasApi } = useContext(listaContext);


/*   console.log(tarefasApi); */

  return (
    <header>
      <h1> Lista de Tarefas </h1>
    </header>
  )


}

export default Header;