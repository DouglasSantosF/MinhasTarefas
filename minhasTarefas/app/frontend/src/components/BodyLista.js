import {React, useContext, useEffect} from 'react';
import listaContext from '../context';

import ListaDeTarefas from "./ListaDeTarefas";
import '../css/BodyLista.css'

const BodyLista = () => {

  const { tarefasApi, loading, setLoading } = useContext(listaContext);

  useEffect( () => {
    setLoading(false)
  },[tarefasApi])

  console.log(loading);

  const mapList = () => {
    const render = tarefasApi.map((item, ind) => 
      <ListaDeTarefas key={ind} tarefa={item.tarefa }status={item.status} id={item.id} />
    )
    return render;
  }

  const Loading = <h1> LOADING </h1>;

  return( loading? Loading : (
    <div className="bodyListaContainer">
      <div className="bodyItens">
        {mapList()}
      </div>
    </div>
      )
  );


};

export default BodyLista;