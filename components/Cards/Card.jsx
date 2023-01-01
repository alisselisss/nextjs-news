import React from 'react';
import css from './Card.module.css'
import Image from 'next/image';

export const Card = ({ title, img, date, author, description }) => {
  return (
    <div className={css.card}>
        <div className={css.card__image}>
            <img fill src={img}/>
        </div>
        <div className={css.card__content}>
            <div className={css.card__about}>
                <span>{author}</span>|
                <span>{date}</span>
            </div>
            <h2>{title}</h2>
            <p>{description}</p>
      </div>
    </div>
  )
}
