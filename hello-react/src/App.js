import logo from './logo.svg';
import './App.css';

function App() {
  const environment = process.env.REACT_APP_ENVIRONMENT || "Unknown";

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <div className="App">
            <h1>Welcome to My React App!</h1>
            <p>This is app is running in the {environment} set by ansible!</p>
          </div>
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
