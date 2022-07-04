import Header from "./components/Header";
import Provider from "./context/Provider";

function App() {
  return (
    <div className="App">
      <Provider>
        <Header/>
      </Provider>
    </div>
  );
}

export default App;
