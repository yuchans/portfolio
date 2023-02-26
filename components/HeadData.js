import Head from "next/head";

export default function HeadData({ title, description, image }) {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:url" content="https://babbang.netlify.app/" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@babbang" />
            <meta name="twitter:creator" content="@babbang" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    );
}
