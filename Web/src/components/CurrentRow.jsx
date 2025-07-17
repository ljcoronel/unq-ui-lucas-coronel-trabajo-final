import { useWordleContext } from "../hooks/useWordleContext.jsx";

function CurrentRow({ letters }) {
    const { session } = useWordleContext();

    return (
        <div className="row current">
            {letters.map((letter, i) => (
                <div key={i} className="filled">
                    {letter}
                </div>
            ))}
            {[...Array(session.wordLenght - letters.length)].map((_, i) => (
                <div key={i} />
            ))}
        </div>
    );
}

export default CurrentRow;
