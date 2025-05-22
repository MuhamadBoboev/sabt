import classes from './card.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import { HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLLIElement> {
  name: string
  image?: string
  link: string
}

function Card({name, link, image, children, ...props}: Props) {

  return (
    <li
      className={classes.item}
      {...props}
    >
      <Link
        href={link}
        className={classes.link}
      >
        <article className={classes.card}>
          <div className={classes.body}>
            {/* <Image
              className={classes.img}
              src={image}
              alt={name}
              width={500}
              height={350}
            /> */}
          </div>
          <div className={classes.content}>
            {children}
          </div>
        </article>
      </Link>
    </li>
  )
}

export { Card }
