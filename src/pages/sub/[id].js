import { useRouter } from "next/router";

function About() {
    const router = useRouter();
    const { id } = router.query;
    return (
        <div>
            <h1>/pages/sub/{id}.js</h1>
            <ul>
                <li>
                    <a href="/">/pages/index.js</a>
                </li>
            </ul>
        </div>
    );
}

export default About;
