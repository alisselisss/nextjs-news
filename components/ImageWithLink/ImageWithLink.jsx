import React from "react";
import css from './ImageWithLink.module.css';
import Link from "next/link";

export const ImageWithLink = ({ content, src, href, alt }) => {
    let path = `/${href}`;
    return (
            <Link href={path}>
                <img src={src} alt={alt} className={css.im}/>
            </Link>
    );
};
