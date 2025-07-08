import { useState } from 'react';
import './App.css';
import {WordleProvider} from "./hooks/useWordleContext.jsx";
import Wordle from "./components/Wordle.jsx";

function App() {

  return (
      <WordleProvider>
          <div className="App">
              <h1>Wordly|Wordle</h1>
              <Wordle />
          </div>
      </WordleProvider>
  );
}

export default App;
