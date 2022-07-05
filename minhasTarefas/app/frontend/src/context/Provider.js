import { useEffect, useState } from "react";
import listaContext from "./index";
import api from '../services/api';
const Provider = ({ children }) => {

  const [ listaApi , setListaApi ] = useState('');
  const [ tarefasApi, setTarefasApi] = useState('');
  const [loading, setLoading] = useState(true)

useEffect(()=> {
  const fetchApi = () => {

    setLoading(true);

    api
    .get("/")
    .then((response) => setListaApi(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });


  }
  fetchApi();
},[]);

useEffect( ()=> {
 setTarefasApi(listaApi); 
}, [listaApi]);

const contextValue = {
  listaApi, setListaApi, tarefasApi, setTarefasApi, loading, setLoading
}

return(
  <listaContext.Provider value={contextValue}>
      { children }
  </listaContext.Provider>
)


}

export default Provider;