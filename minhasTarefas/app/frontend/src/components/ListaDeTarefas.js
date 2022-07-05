import {React, useContext} from 'react';
import listaContext from '../context';
import '../css/ListaDeTarefas.css';
import api from '../services/api';



const ListaDeTarefas = ({id, status, tarefa}) => {

  const { tarefasApi, setTarefasApi } = useContext(listaContext);
 /*  console.log(tarefasApi); */

  const removeItem = (id) => {

    const filterList = tarefasApi.filter((item)=> item.id !== id);
    setTarefasApi(filterList);

    api.delete(`http://localhost:3002/${id}`);

  }

    return(
      <div className="itemListContainer">
         
        <div className='item'>
          <p> Status :</p>
          <p>{status}</p>
        </div>
        <div className='item'>
          <p> Tarefa :</p>
          <p>{tarefa}</p>
        </div>
        <div>
        <button onClick={() => removeItem(id)} className='delButton' type="button" form="form1" value="Submit">Delete</button>
        </div>


      </div>
    );


};

export default ListaDeTarefas;