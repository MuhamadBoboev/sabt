import classes from '../card.module.scss'
import Skeleton from 'react-loading-skeleton'
import { ReactNode } from 'react'
import clsx from 'clsx'

interface Props {
  children: ReactNode
  className?: string
}

function CardSkeleton({children, className}: Props) {
  return (
    <li className={clsx(classes.item, className)}>
      <div className={classes.link}>
        <article className={classes.card}>
          <div className={classes.left}>
            <Skeleton
              className={classes.img}
            />
          </div>
          <div className={classes.right}>
            {children}
          </div>
        </article>
      </div>
    </li>
  )
}

export { CardSkeleton }