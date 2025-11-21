import React, { useState } from 'react';
import IdeaForm from './components/IdeaForm';
import IdeaResult from './components/IdeaResult';
import './App.css'; // We'll use App.css or index.css, let's stick to index.css for simplicity or clean up App.css

function App() {
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>🧠 AI Idea Generator</h1>
        <p>Transform your problems into innovative solutions with AI</p>
      </header>

      <main className="app-main">
        <IdeaForm onResult={setResult} onError={setError} />

        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        <IdeaResult result={result} />
      </main>

      <footer className="app-footer">
        <p>Powered by Node-RED & Ollama</p>
      </footer>
    </div>
  );
}

export default App;
