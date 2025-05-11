import classes from './SliderNav.module.scss'
import { HandySvg } from 'handy-svg'
import clsx from 'clsx'
import { ReactNode } from 'react'

interface SliderNavProps {
  prevId: string
  nextId: string
  className?: string
  theme?: 'light' | 'dark'
  children?: ReactNode
}

function SliderNav({theme = 'dark', prevId, nextId, className, children}: SliderNavProps) {
  return (
    <div className={clsx(classes.Navigation, (theme === 'light') && classes.Light, className)}>
      <button
        id={prevId}
        className={classes.Prev}
      >
        <HandySvg
          src="/assets/icons/arrow-left.svg"
          width={12}
          height={13}
          alt={'left'}
        />
      </button>
      {children}
      <button
        id={nextId}
        className={classes.Next}
      >
        <HandySvg
          src="/assets/icons/arrow-right.svg"
          width={12}
          height={13}
          alt={'right'}
        />
      </button>
    </div>
  )
}

export default SliderNav