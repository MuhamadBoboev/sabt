import { PropsWithChildren, ReactNode } from "react"
import classes from './title.module.scss'
import clsx from "clsx"

interface Props {
    main?: boolean
    className?: string
}

export const Title = ({main, className, children}: PropsWithChildren<Props>) => {
    const Tag = main ? 'h1' : 'h2'
    
    return <Tag className={clsx(classes.title, className)}>
        {children}
    </Tag>
}