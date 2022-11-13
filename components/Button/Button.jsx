import React from 'react'
import css from './Button.module.css'

export const Button = ({title, children}) => {
  if (!children)
      return <button className={css.button}>{title}</button>;
  return <button className={css.button}>{children}</button>;
}
