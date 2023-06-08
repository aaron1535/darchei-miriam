import React, { FC } from 'react'

type ButtonProps = {
    name: string;
}

export const Button: FC<ButtonProps> = ({name}) => {
  return (
    <button >{name}</button>
  )
}

export default Button;