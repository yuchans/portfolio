import Head from "next/head";
import Link from "next/link";
import Layout from "components/layout";
import Hero from "components/home/hero";
import HeadData from "components/HeadData";
import Skill from "components/home/skill";
import Certificate from "components/home/certificate";

export default function Home() {
    return (
        <Layout>
            <HeadData title="정유찬 포트폴리오" description="정유찬 포트폴리오" image="/images/og-image.png" />
            <Hero />
            <Skill />
            <Certificate />
        </Layout>
    );
}
