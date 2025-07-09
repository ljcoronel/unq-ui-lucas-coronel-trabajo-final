import keys from "../constants/keys.js";
import {useWordleContext} from "../hooks/useWordleContext.jsx";

function Keypad() {
    const { usedKeys } = useWordleContext();

    return (
        <div className="keypad">
            {keys.map((l) => {
                const solution = usedKeys[l.key];
                return (
                    <div key={l.key} className={solution}>
                        {l.key}
                    </div>
                );
            })}
        </div>
    );
}

export default Keypad;
