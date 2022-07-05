import { useEffect, useState } from "react";
import listaContext from "./index";
import api from '../services/api';
const Provider = ({ children }) => {

const [ tarefasAPI, setTarefasApi] = useState('');  
const [ listaApi , setListaApi ] = useState(tarefasAPI);

useEffect(()=> {
  const fetchApi = () => {

    api
    .get("/")
    .then((response) => setTarefasApi(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }
  fetchApi();
},[]);

const contextValue = {
  listaApi
}

return(
  <listaContext.Provider value={contextValue}>
      { children }
  </listaContext.Provider>
)


}

export default Provider;