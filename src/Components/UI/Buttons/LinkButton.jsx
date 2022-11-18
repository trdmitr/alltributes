import React from 'react'
import classes from './MyButton.module.css'
export const LinkButton =  ( {children, ...props}) => {
    return (
      <button { ...props} className= {classes.linkBtn}> {children}</button>
    )
}
export default LinkButton