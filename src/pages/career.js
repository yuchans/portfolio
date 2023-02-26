import Layout from "components/layout";
import Head from "next/head";
import Link from "next/link";
import HeadData from "components/HeadData";

export default function Career() {
    return (
        <Layout>
            <HeadData title="정유찬 포트폴리오" description="정유찬 포트폴리오" image="/images/og-image.png" />
        </Layout>
    );
}
