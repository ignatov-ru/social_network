import React, { memo } from 'react'
import s from './NoElement.module.scss'

type PropsType = {
  elements: string
  writeSomething?: boolean
}

const NoElement: React.FC<PropsType> = ({
  elements,
  writeSomething = false,
}) => {
  let verb: 'found' | ''

  if (elements === 'users') {
    verb = 'found'
  } else {
    verb = ''
  }

  return (
    <div className={s.container}>
      <span>{`No ${elements} ${verb}`}</span>
      {writeSomething && <span>Write something!</span>}
    </div>
  )
}

export default memo(NoElement)
