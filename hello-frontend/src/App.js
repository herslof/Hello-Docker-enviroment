import logo from './logo.svg';
import {useEffect, useState} from "react";
import './App.css';

function App() {
  const environment = process.env.REACT_APP_ENVIRONMENT || "Unknown";
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [backendEnv, setBackendEnv] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
      setIsLoading(true);

    fetch("/api/messages")
        .then((response) => response.json())
        .then((data) => {
            setMessages(data);
            setIsLoading(false);
        })

        .catch((error) => {
          setIsLoading(false)
          console.error("error fetching from backend:", error);
        });
  }, []);

  useEffect(() => {
      fetch("/api/env")
          .then((response) => response.json())
          .then((data) => setBackendEnv(data.environment))
          .catch((error) => {
              console.error("Failed to fetch backend env:", error);
          });
  }, []);


  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("/api/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, message}),
    })
        .then((response) => response.json())
        .then((data) => {
          setMessages([...messages, data]);
          setMessage("");
        })
        .catch((err) => console.error("Failed to send message", err));
  }

  const renderMessages = () =>
      messages.map((msg, idx) => (
          <p key={idx}>
            <strong>{msg.username}</strong>: {msg.message} {msg.timestamp}
          </p>
          )
      );


  return (
    <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <div className="App">
                <h1>Welcome to My React App!</h1>
                <p>This app is running in the frontend environment:
                    <strong>{environment}</strong> (set by Ansible)
                </p>
                <p>
                    Backend environment: <strong>{backendEnv}</strong>
                </p>
            </div>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />

                <input
                    type="text"
                    placeholder="Your message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                />
                <button type="submit">Send</button>
            </form>

            <h3>Messages</h3>
            {isLoading ? (
                <p>Loading messages...</p>
            ) : (
                renderMessages()
            )}

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
