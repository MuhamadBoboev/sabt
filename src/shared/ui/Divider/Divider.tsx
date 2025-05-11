import classes from './Divider.module.scss'
import { Fragment, HTMLAttributes } from 'react'
import clsx from 'clsx'
import { Wrapper } from '@shared/ui/Wrapper'

interface DividerProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  wrapperClassName?: string
  withWrapper?: boolean
}

function Divider({className, wrapperClassName, withWrapper = false, ...props}: DividerProps) {
  const Tag = withWrapper ? Wrapper : Fragment

  return (
    <Tag>
      <div className={clsx(classes.Divider, className)} {...props}/>
    </Tag>
  )
}

export default Divider