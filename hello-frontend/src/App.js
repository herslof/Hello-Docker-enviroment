import logo from './logo.svg';
import {useEffect, useState} from "react";
import './App.css';

function App() {
  const environment = process.env.REACT_APP_ENVIRONMENT || "Unknown";
  const [backendMessage, setBackendMessage] = useState("");

  useEffect( () => {
    fetch("/api/messages")
      .then ((response) => response.json())
      .then((data) => {
        const formatted = data
            .map(msg => `${msg.username}: ${msg.message} (${msg.timestamp})`)
        .join("\n");
        setBackendMessage(formatted);
      })
      .catch((error) => {
        console.error("error fetching from backend:", error);
        setBackendMessage("Failed to fetch backend message.");
      });
    }, []
  )

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <div className="App">
            <h1>Welcome to My React App!</h1>
            <p>This is app is running in the {environment} set by ansible!</p>
            <p>Backend says: {backendMessage}</p>
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
