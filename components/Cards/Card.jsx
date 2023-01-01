import React from 'react';
import css from './Card.module.css'
import Link from 'next/link';

export const Card = ({ title, id, media, published_date, adx_keywords, abstract}) => {
  return (
    <div className={css.card}>
        <div className={css.card__image}>
        {media[0] && <img src={media[0]["media-metadata"][2].url}/>}
        </div>
        <div className={css.card__content}>
            <div className={css.card__about}>
                {adx_keywords.split(";").map((kw, i) => (
                  <span key={i}>{kw}</span>
                ))}
                <span>{published_date}</span>
            </div>
            <Link href={`/blog/${id}`} className={css.card_description}>
              <h2>{title}</h2>
              <p>{abstract}</p>
            </Link>
      </div>
    </div>
  )
}
