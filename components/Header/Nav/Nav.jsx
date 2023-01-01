import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { postFetch } from '../../../utils/Fetch';
import { eraseCookie, getCookie } from '../../../utils/setCookies';
import { ButtonLink } from '../UI/ButtonLink/ButtonLink';
import css from './Nav.module.css';

export const Nav = () => {
  const [isLogin, setLogin] = useState(!!getCookie("refreshToken"));
  const router = useRouter();

  useEffect(() => {
    setLogin(!!getCookie("refreshToken"));
  }, [getCookie("refreshToken")]);

  function logout(e) {
        e.preventDefault();
        postFetch("https://norma.nomoreparties.space/api/auth/logout",
         { token: getCookie("refreshToken") , }).then(res => {
            eraseCookie("resreshToken");
            eraseCookie("accessToken");
            router.reload();
        });
  };

  return (
    <nav className={css.nav}>
        <h1 className={css.nav__logo}>Logo</h1>
        <ul className={css.nav__list}>
            <li>
                <ButtonLink href="/">Главная</ButtonLink>
            </li>
            {isLogin && (
                <li>
                    <ButtonLink href="/profile">Профиль</ButtonLink>
                </li>
            )}
            {!isLogin && (
                <li>
                    <ButtonLink href="/sign-in">Вход</ButtonLink>
                </li>
            )}
            {isLogin && (
                <li>
                    <ButtonLink href="/sign-in" onClick={logout}>Выход</ButtonLink>
                </li>
            )}
            <li>
                <ButtonLink href="/contact">Контакты</ButtonLink>
            </li>
            <li>
                <ButtonLink href="/about">О нас</ButtonLink>
            </li>
        </ul>
    </nav>
  )
}
