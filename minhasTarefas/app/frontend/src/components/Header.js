import {React, useState, useContext} from 'react';
import listaContext from '../context';


const Header = () => {

  const { listaApi } = useContext(listaContext);
  /* const [ api, setApi] = useState(listaApi); */

  console.log(listaApi);

  return (
    <header>
      <h1> Lista de Tarefas </h1>
    </header>
  )


}

export default Header;