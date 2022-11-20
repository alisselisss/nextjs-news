import React from 'react'
import css from './Button.module.css'

export const Button = ({title, children, type, onClick}) => {
  if (!children)
      return <button type={type} onClick={onClick} className={css.button}>{title}</button>;
  return <button type={type} onClick={onClick} className={css.button}>{children}</button>;
}
