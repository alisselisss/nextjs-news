import React from 'react';
import { ButtonLink } from '../UI/ButtonLink/ButtonLink';
import css from './Nav.module.css';

export const Nav = () => {
  return (
    <nav className={css.nav}>
        <h1 className={css.nav__logo}>Logo</h1>
        <ul className={css.nav__list}>
            <li>
                <ButtonLink href="/">Главная</ButtonLink>
            </li>
            <li>
                <ButtonLink href="/profile">Профиль</ButtonLink>
            </li>
            <li>
                <ButtonLink href="/sign-in">Вход</ButtonLink>
            </li>
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
