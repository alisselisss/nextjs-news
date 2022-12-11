import React, {useEffect, useState} from "react";
import { Layout } from "../components/Layout/Layout";
import { Nav } from "../components/Header/Nav/Nav";
import css from './index.module.css';
import { Card } from "../components/Cards/Card";

export default function IndexPage({ data }) {
    return (
    <Layout title="Главная">
        <header>
            <Nav />
        </header>
        <main className={css.main}>
            <div className={css.main__title}>
                <h1 className={css.main__logo}>Мой Блог</h1>
            </div>
            <section className={css.cards}>
                {data.map((el) => (
                    <Card key={el.id} id={el.id} {...el} />
                ))}
            </section>
        </main>
    </Layout>);
};

export async function getStaticProps(context) {
    /*const result = await fetch("https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=FgGw48IcXAuede23OyMRlSUwvHPzeXDD").then(res => {
        if (res.ok) return res.json();
        else throw Error(res.statusText);
    }).catch(err => console.log(err));*/
    
    const res = await fetch("https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=FgGw48IcXAuede23OyMRlSUwvHPzeXDD").then(res => res.json());
    
    if (!Array.isArray(res.results)) {
        return {
            props: {
                data: [],
            },
            revalidate: 100,
        }
    }
    return {
        props: {
            data: [...res.results],
        },
        revalidate: 100,
    }
}