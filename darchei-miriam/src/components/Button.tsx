import React, { FC } from 'react'

type ButtonProps = {
    name: string;
}

export const Button: FC<ButtonProps> = ({name}) => {
  return (
    <button >test me! {name}</button>
  )
}

export default Button;