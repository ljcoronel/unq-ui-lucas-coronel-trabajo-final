import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {WordleProvider} from "./hooks/useWordleContext.jsx";

function App() {

  return (
      <WordleProvider>
          <div className="App">
              <h1>Wordly|Wordle</h1>
          </div>
      </WordleProvider>
  );
};

export default App;
