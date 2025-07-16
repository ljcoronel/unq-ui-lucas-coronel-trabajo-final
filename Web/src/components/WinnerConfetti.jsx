import {useEffect, useState} from "react";
import Confetti from "react-confetti";

function WinnerConfetti() {
    const [dimensions, setDimensions] = useState({ width: document.innerWidth, height: document.innerHeight });

    useEffect(() => {
        const handleResize = () => setDimensions({ width: window.innerWidth, height: window.innerHeight });
        document.addEventListener('resize', handleResize);
        return () => document.removeEventListener('resize', handleResize);
    }, []);

    return (
        <Confetti width={dimensions.width} height={dimensions.height} />
    );
}

export default WinnerConfetti;
