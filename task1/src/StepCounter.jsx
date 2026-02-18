import { useState } from 'react';

function StepCounter({ initialValue = 0, step = 1 }) {
    const [count, setCount] = useState(initialValue);
    const [history, setHistory] = useState([]);
    const [operationsCount, setOperationsCount] = useState(0);

    const increment = () => {
        setCount(prevCount => {
            const newCount = prevCount + step;
            setHistory(prevHistory => [...prevHistory, newCount]);
            setOperationsCount((prev) => prev + 1);
            return newCount;
        });
    };

    const decrement = () => {
        setCount(prevCount => {
            const newCount = prevCount - step;
            setHistory(prevHistory => [...prevHistory, newCount]);
            setOperationsCount((prev) => prev + 1);
            return newCount;
        });
    };

    const reset = () => {
        setCount(initialValue);
        setHistory([]);
        setOperationsCount(0);
    };

    return (
        <div>
            <h2>Current Count: {count}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
            <h3>Total operations: {operationsCount}</h3>
            <h3>Last 5 values from history: {history.slice(-5).join(', ')}</h3>
        </div>
    );
}

export default StepCounter;