import "./App.css";
const randomNum = require('random-num')
function App() {
  return (
    <div className="App">
        <header className="App-header">
            <h1>{randomNum(1,100)}</h1>
        </header>
    </div>
  );
}

export default App;
