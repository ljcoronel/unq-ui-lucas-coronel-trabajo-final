import {useWordleContext} from "../hooks/useWordleContext.jsx";
import keys from "../constants/keys.js";

function Keypad() {
    const { usedKeys, loading, handleKeyup } = useWordleContext();

    return (
        <div className="keypad">
            {keys.map((l) => {
                const letter = l.key.toLowerCase();
                const solution = usedKeys[letter];
                return (
                    <button key={l.key} className={solution} onClick={() => handleKeyup({ key: l.key })} disabled={loading}>
                        {(l.key === "Enter") ? "⏎" : (l.key === "Backspace") ? "⌫" : l.key}
                    </button>
                );
            })}
        </div>
    );
}

export default Keypad;
