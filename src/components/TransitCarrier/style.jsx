import { css } from "@linaria/core"
import { styled } from "@linaria/react"

export const CarrierStyle = styled.div` 
  position: absolute;
  top: 30px;
  left: 30px;
  transform: translate(${({ index }) => `${index * 20}px`}, -20px)
`