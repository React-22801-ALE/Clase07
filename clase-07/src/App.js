import logo from './logo.svg';
import './App.css';
// importo el componente Button.js
import Button from './components/Button/Button';
import Video from './components/Video/Video';
import Audio from './components/Audio/Audio';

function App() {
  return (
    <div className="App">
      <Button />
      <header className="App-header">
        <Button />
        <Video />
        <Audio />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. Hola Mundo.
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
