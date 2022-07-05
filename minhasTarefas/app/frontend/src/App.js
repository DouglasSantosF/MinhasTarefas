import BodyLista from "./components/BodyLista";
import Header from "./components/Header";
import Provider from "./context/Provider";
import {BrowserRouter, Route} from "react-router-dom"
import novaTarefa from "./pages/novaTarefa";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Provider>
          <Header/>
          <Route exact path="/" component={BodyLista}></Route>
          <Route  path="/novatarefa" component={novaTarefa}></Route>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
