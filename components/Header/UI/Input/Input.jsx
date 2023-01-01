import React from 'react';
import css from "./input.module.css";

export const Input = ({labelTitle, children, ...props}) => {
  return (
    <label className={css.input}>
      <span>{children}</span>
      <input {...props} />
    </label>
  )
}