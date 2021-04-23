import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import global from './global';
import useAPI from './hooks/use.api'

function App() {
  global.data = useAPI();

  useEffect(() => {
    global.data.getAll()
    global.data.getFish(true)
    global.data.getBugs()
    console.log(global.data.fish,global.data.bugs,global.data.crits)
  },[]) 
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
