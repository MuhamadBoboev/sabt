import Link, { LinkProps } from 'next/link'
import { AllHTMLAttributes } from 'react'

export interface ButtonMoreProps
  extends AllHTMLAttributes<HTMLButtonElement | LinkProps | HTMLAnchorElement> {
  component?: 'a' | 'button' | typeof Link
  buttonSize?: 'large' | 'small'
  color?: 'textDark' | 'textDark2' | 'textDark3' | 'secondary' | 'primary'
}
