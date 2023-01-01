import React from "react";
import css from './List.module.css';
import { ImageWithLink } from "../ImageWithLink/ImageWithLink";

export const List = ({ content }) => {
    return (
        <div className={css.gallery}>
            {content.map((el, i) =>
                (<ImageWithLink key={i} href={el.id} src={el.url} alt={el.title}/>))
            }
        </div>
    );
};
