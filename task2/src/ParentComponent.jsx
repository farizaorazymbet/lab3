import { useState } from 'react';
import UserProfile from './UserProfile';

function ParentComponent() {
    const [userId, setUserId] = useState(1);

    return (
        <div>
            <UserProfile userId={userId} />
            <button onClick={() => setUserId(1)}>User 1</button>
            <button onClick={() => setUserId(2)}>User 2</button>
            <button onClick={() => setUserId(3)}>User 3</button>
        </div>
    );
}
export default ParentComponent;