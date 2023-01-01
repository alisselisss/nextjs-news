import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Layout } from '../../components/Layout/Layout';
import { Input } from '../../components/Header/UI/Input/Input';
import { Button } from '../../components/Header/UI/Button/Button';
import { ButtonLink } from '../../components/Header/UI/ButtonLink/ButtonLink';
import { postFetch } from "../../utils/Fetch";
import { setCookie } from '../../utils/setCookies';
import css from "../sign-in//signin.module.css"


const index = () => {
  const[email, setEmail] = useState();
  const[password, setPassword] = useState();
  const[name, setName] = useState();
  const[isLoading, setLoading] = useState();
  const router = useRouter();

  useEffect(() => {
    router.prefetch("/");
  })

  function FormHandler(e) {
    e.preventDefault();
    setLoading(true);
    postFetch("https://norma.nomoreparties.space/api/auth/register", {
      email, 
      password,
      name,
    }).then(res => {
      setCookie("accessToken", res.accessToken, 1);
      setCookie("refreshToken", res.refreshToken);
      setLoading(false);
      router.push("/");
    });
  }

  return (
    <Layout title="Sign in" onlyUnAuth>
      <form className={css.form} onSubmit={ FormHandler }>
        <fieldset className={css.form__inputs}>
          <legend>Регистрация</legend>
          <Input onChange={e => setName(e.target.value)} placeholder="имя" required type="text" value={name}>Имя</Input>
          <Input onChange={e => setEmail(e.target.value)} placeholder="логин" required type="email" value={email}>Логин</Input>
          <Input onChange={e => setPassword(e.target.value)} placeholder="пароль" required type="password" value={password}>Пароль</Input>
        </fieldset>
        <ButtonLink type="submit" href="/sign-in">Войти</ButtonLink>
        <Button type="submit" disabled={isLoading}>
          {isLoading ? "..." : "Зарегистрироваться"}
        </Button>
      </form>
    </Layout>
  )
}

export default index