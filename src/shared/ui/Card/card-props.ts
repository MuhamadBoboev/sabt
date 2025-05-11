import { HTMLAttributes} from 'react'

export interface CardProps extends HTMLAttributes<HTMLElement> {
  link: string
  image: string
}
