import React, {useEffect, useState} from "react";
import { Layout } from "../components/Layout/Layout";
import { Nav } from "../components/Header/Nav/Nav";
import css from './index.module.css';
import { Card } from "../components/Cards/Card";
import { cardsMock } from "../constants/mock"

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
                {cardsMock.map(card => (
                    <Card key={card.id} {...card} />
                ))}
            </section>
        </main>
    </Layout>);
}