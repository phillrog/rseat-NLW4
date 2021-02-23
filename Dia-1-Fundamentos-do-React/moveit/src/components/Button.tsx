import { useState } from "react";
import '../styles/global.css';

interface ButtonProps {
    color: string;
    children: string;
}

export function Button(props: ButtonProps) {
    const [counter, setCounter] = useState(1);

    function increment() {
        setCounter(counter + 1);
    }

    return (
        <button type="button" style={{ backgroundColor: props.color }}
            onClick={increment}>
            {props.children} <span>{counter}</span>
        </button>
    );
}