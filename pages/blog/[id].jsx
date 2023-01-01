import React from 'react';
import { useRouter } from 'next/router';
import { Layout } from '../../components/Layout/Layout';
import { Nav } from "../../components/Header/Nav/Nav";
import css from './blog.module.css';
import ErrorPage from 'next/error';

const BlogPage = props => {
    const router = useRouter();
    console.log(props.hasOwnProperty('id'), props);
    if (!props.hasOwnProperty('id')) return <ErrorPage statusCode={404} />
    if (router.isFallback) return <h1>Loading..</h1>
    return (
        <Layout title={props.title}>
        <header>
            <Nav />
        </header>
        <main className={css.main}>
            <div className={css.main__title}>
                <h1 className={css.main__logo}>{props.title}</h1>
            </div>
            <section className={css.card}>
                <div className={css.card__image}>
                    {props.media[0] && <img src={props.media[0]["media-metadata"][2].url}/>}<br />
                    {props.adx_keywords.split(";").map((kw, i) => (
                        <span key={i}>{kw}</span>
                    ))}
                    <br/><span>{props.published_date}</span>
                </div>
                <div className={css.text}>
                    <p>{props.abstract}</p>
                </div>
            </section>
        </main>
    </Layout>);
}

export default BlogPage;

export async function getStaticProps(context) {
    const pageId = context.params.id;
    const pages = await fetch(`https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=FgGw48IcXAuede23OyMRlSUwvHPzeXDD`).then(res => res.json());

    for (var i = 0; i < pages.num_results; i++) {
        if (pages.results[i].id == pageId) 
            return {
                props: pages.results[i],
            }
    }
    return {
        props: {},
    }
}

export async function getStaticPaths() {
    const pages= await fetch("https://api.nytimes.com/svc/mostpopular/v2/emailed/30.json?api-key=FgGw48IcXAuede23OyMRlSUwvHPzeXDD").then(res => res.json());
    const res = Array.from(pages.results).map((el) => {
        return { params: {id: String(el.id) } }
    })
    return {
        paths: res,
        fallback: true,
    }
}
