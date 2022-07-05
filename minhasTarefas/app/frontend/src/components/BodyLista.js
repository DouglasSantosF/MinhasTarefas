import {React, useContext} from 'react';
import listaContext from '../context';

import ListaDeTarefas from "./ListaDeTarefas";
import '../css/BodyLista.css'

const BodyLista = () => {

  const { tarefasApi } = useContext(listaContext);

  console.log(tarefasApi);

  const mapList = () => {

   const render = tarefasApi.map((item, ind) =>
    <ListaDeTarefas key={ind} tarefa={item.tarefa }status={item.status} id={item.id} />
   )
    return render;

  }

  return(
    <div className="bodyListaContainer">
      <div className="bodyItens">
          {mapList}
      </div>
    </div>
  );


};

export default BodyLista;