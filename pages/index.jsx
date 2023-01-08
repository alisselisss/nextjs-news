import React, {useEffect, useState} from "react";
import { Layout } from "../components/Layout/Layout";
import { Nav } from "../components/Header/Nav/Nav";
import css from './index.module.css';
import { Card } from "../components/Cards/Card";
import { getFetch } from "../utils/Fetch";
import { getCookie, setCookie } from "../utils/setCookies";
import { send } from "process";


export default function IndexPage({ data }) {
    const [userInfo, setUserInfo] = useState({ email: "", name: "" });
    useEffect(() => {
        const sendUser = () => {
            getFetch("https://norma.nomoreparties.space/api/auth/user", getCookie("accessToken")).then(
                res => {
                    setUserInfo({ 
                        email: res.user.email,
                        name: res.user.name,
                    });
                }
            );
        };
        if (getCookie("refreshToken")) {
            if (!getCookie("accessToken")) {
                getFetch("https://norma.nomoreparties.space/api/auth/token", {
                    token : getCookie("refreshToken"),
                }).then(res => {
                    setCookie("accessToken", res.accessToken, 1);
                    setCookie("refreshToken", res.refreshToken);                    
                })
                return;
            } 
            sendUser();    
        }
    }, []);
    
    return (
    <Layout title="Главная">
        <header>
            <Nav />
        </header>
        <main className={css.main}>
            <div className={css.main__title}>
                <h1 className={css.main__logo}>Hello, {userInfo.name}!</h1>
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