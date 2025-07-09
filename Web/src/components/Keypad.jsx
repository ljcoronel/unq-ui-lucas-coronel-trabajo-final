import keys from "../constants/keys.js";

function Keypad() {
    return (
        <div className="keypad">
            {keys.map((l) => (
                <div key={l.key}>{l.key}</div>
            ))}
        </div>
    );
}

export default Keypad;
