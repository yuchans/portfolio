import Head from "next/head";
import Link from "next/link";
import Layout from "components/layout";
import Hero from "components/home/hero";

export default function Home() {
    return (
        <Layout>
            <Head>
                <title>빡빡이 포트폴리오</title>
                <meta name="description" content="빡빡이 포트폴리오" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Hero />
        </Layout>
    );
}
