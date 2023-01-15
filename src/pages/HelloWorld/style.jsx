import { css } from '@linaria/core'
import { styled } from '@linaria/react'

export const bgStyle = css`
  color: gold;
`

export const StyledButton = styled.button`
  padding: 10px;
  background-color: ${({ count }) => colorMap(count)}
`

const colorMap = index => {
  switch (index) {
    case 0: return '#eee'
    case 1: return '#fdd'
    case 2: return '#dfd'
    case 3: return '#ddf'
    default: return 'gold'
  }
}