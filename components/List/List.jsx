import React from "react";
import css from './List.module.css'

export const List = ({ content }) => {
    return (
        <div className={css.a}>
            {content.map((el, i) =>
                (<img key={i} src={el.url} alt={el.title}/>))
            }
        </div>
    );
};
