import { useRouter } from "next/router";
import React from "react";

const BlogItem = ({ data }) => {
    const router = useRouter();
    if (router.isFallback) return <h1>Loading..</h1>
    return (<img src={data.url} href={data.href} alt={data.title}/>);
}

export default BlogItem;

export async function getStaticProps(context) {
    const photoArticle = await fetch(`https://jsonplaceholder.typicode.com/photos/${context.params.id}`).then(res => res.json());
    return {
        props: {
            data: photoArticle,
        },
    };
}

export async function getStaticPaths(context) {
    return {
        paths: [{ params: { id: ["1"] } }],
        fallback: true,
    };
} 