import Link from 'next/link'
import classes from './button-more.module.scss'

interface Props {
    name: string 
    link: string
}
export const ButtonMore = ({name, link}: Props) => {
    return <Link href={link} className={classes.body}>
        <p className={classes.text} >
            {name}
        </p>
    </Link>
}