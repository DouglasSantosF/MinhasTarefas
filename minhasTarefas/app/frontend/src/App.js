import Header from "./components/Header";
import ListaDeTarefas from "./components/ListaDeTarefas";
import Provider from "./context/Provider";

function App() {
  return (
    <div className="App">
      <Provider>
        <Header/>
        <ListaDeTarefas />
      </Provider>
    </div>
  );
}

export default App;
