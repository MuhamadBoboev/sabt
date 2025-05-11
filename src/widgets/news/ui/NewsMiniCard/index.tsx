import { INews } from '@widgets/news/model/News'
import classes from './news-mini-card.module.scss'
import Link from 'next/link'
import { FormatDate } from '@shared/ui/Date'

interface Props {
    item: INews
}

export const NewsMiniCard = ({item}: Props) => {

    return <Link href={`/news/${item.id}`} className={classes.card} >
        <div className={classes.body} >
            <div className={classes.bl_title} >
                <p className={classes.title}>{item.title}</p>
            </div>
            <div className={classes.bottom} >
                <FormatDate date={item.date} />
            </div>
        </div>
    </Link>
}