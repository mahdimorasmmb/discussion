import React from 'react'
import style from "./style.module.less"

interface Props {
    isReply?:boolean
}

const Input = ({isReply}:Props) => {
  return (
    <input className={style.input} placeholder={isReply ? "Reply" : 'Start a discussion'}/>
  )
}

export default Input