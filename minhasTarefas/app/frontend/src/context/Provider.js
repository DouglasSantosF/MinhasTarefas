import { useEffect, useState } from "react";
import listaContext from "./index";
const Provider = ({ children }) => {

const [ listaApi , setListaApi ] = useState('');

useEffect(()=> {
  const fetchApi = async () => {
    const endpoint = 'http://localhost:3002/'
    const apiList = await fetch(endpoint).then(res => res.json);
    console.log(endpoint);
    setListaApi(apiList);
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