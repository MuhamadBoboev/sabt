import classes from './card.module.scss'
import { HandySvg } from 'handy-svg'
import { IService } from '@widgets/services/model/services'
import Link from 'next/link'
interface Props {
    item: IService
    index: number
}
export const Card = ({item, index}: Props) => {
    return  <Link href={`/services/#${item.id}`} className={classes.content} >
        <div className={classes.body}>
            <div className={classes.header}>
                <h3 className={classes.title} >
                    {item.name}
                </h3>
                <div className={classes.index}>0{index + 1}</div>
            </div>
            <div className={classes.footer}>
                <p className={classes.description}>{item.description}</p>
            </div>
        </div>
    </Link>
}