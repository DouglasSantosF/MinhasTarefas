import React from "react";
import '../css/novaTarefa.css';

const novaTarefa = () => {

  return(
    <div className="formCountainer">
      <form>
        <label>
          tarefa:
          <input type="text" name="tarefa" />
       </label>
      
      <label>
        status:
        <input type="text" name="status" />
     </label>
       <input type="" value="Enviar" />
      </form>
    </div>
  )

};

export default novaTarefa;