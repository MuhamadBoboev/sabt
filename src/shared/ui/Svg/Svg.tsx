'use client'
import { AllHTMLAttributes } from 'react'
import { HandySvg } from 'handy-svg'

interface Props extends AllHTMLAttributes<SVGElement | HTMLElement> {
  src: string
}

function Svg(props: Props) {
  if (props.src.endsWith('.svg')) {
    return <HandySvg {...(props as any)} />
  }

  return (
    <img
      alt=""
      src=""
      {...(props as any)}
    />
  )
}

export { Svg }
