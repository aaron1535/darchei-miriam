import Button from '@/components/Button'
import React from 'react'

type Props = {}

function index({}: Props) {
  return (
    <>
    <div><Button name='David'></Button></div>
    <div><Button name='Yossef'></Button></div>
    <div><Button name='Chaim'></Button></div>
    </>
  )
}

export default index