import './App.css';
import {WordleProvider} from "./hooks/useWordleContext.jsx";
import Wordle from "./components/Wordle.jsx";

function App() {
  return (
      <WordleProvider>
          <Wordle />
      </WordleProvider>
  );
}

export default App;
