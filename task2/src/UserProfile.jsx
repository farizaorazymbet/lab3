import { use } from 'react';
import { useState, useEffect } from 'react';

function UserProfile({ userId }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, { signal });
                const data = await response.json();
                setUser(data);
                setLoading(false);
            } catch (err) {
                if (err.name === 'AbortError') return;
                setError("Something went wrong!");
                setLoading(false);
            }
        };

        fetchData();

        return () => controller.abort();
    }, [userId]);

    return (
        <div>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {user && (
                <div>
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                </div>
            )}
            <button onClick={() => window.location.reload()}>Refresh</button>
        </div>

    );
}

export default UserProfile;