import KeyList from "./KeyList.jsx";
import { keys1, keys2, keys3 } from "../constants/keys.js";

function Keypad() {
    return (
        <div>
            <KeyList keys={keys1} />
            <KeyList keys={keys2} />
            <KeyList keys={keys3} />
        </div>
    );
}

export default Keypad;
