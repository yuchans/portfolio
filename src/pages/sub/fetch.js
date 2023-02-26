import { useEffect, useState } from "react";

function Fetch() {
    const [user, setUser] = useState(null);
    useEffect(() => {
        fetch(process.env.NEXT_PUBLIC_API_URL + "/api/hello")
            .then((res) => res.json())
            .then((json) => setUser(json));
    }, []);
    return (
        <div>
            <h1>/pages/sub/about.js</h1>
            <h2>{user.name}</h2>
            <ul>
                <li>
                    <a href="/">/pages/index.js</a>
                </li>
            </ul>
        </div>
    );
}

export default Fetch;
