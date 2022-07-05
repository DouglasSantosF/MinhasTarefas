import {React, useState, useContext} from 'react';
import listaContext from '../context';

const ListaDeTarefas = () => {

  const { tarefasApi } = useContext(listaContext);

  const { tarefa, status } = tarefasApi[0];

  console.log(tarefasApi);

    return(



      <div className="itemListContainer">
         
        <p>{tarefa}</p>
        <p>{status}</p>


      </div>
    );


};

export default ListaDeTarefas;