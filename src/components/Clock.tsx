import { useEffect, useState } from "react";
import "../styles.css";

export const Clock: React.FC = () => {

    const [ date, setDate ] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(
            ( () => setDate(new Date())), 1000
        )
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="clockContainer">{ date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }</div>
    );
}

export default Clock;