import React from 'react'
import { cx } from '@linaria/core'

import { tokenStyle } from './style'

const Token = ({ data, onClick }) => {
  const { id } = data
  return (
    <div className={cx(tokenStyle, 'token')} onClick={() => onClick(id)} />
  )
}

export default Token
