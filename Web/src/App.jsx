import './App.css';
import {WordleProvider} from "./hooks/useWordleContext.jsx";
import Wordle from "./components/Wordle.jsx";

function App() {

  return (
      <WordleProvider>
          <div>
              <h1 className="fs-4 py-4 border-bottom mb-2 text-dark">Wordly|Wordle</h1>
              <Wordle />
          </div>
      </WordleProvider>
  );
}

export default App;
