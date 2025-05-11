import { INews } from '@widgets/news/model/News'
import classes from './news-card.module.scss'
import { Card } from '@shared/ui/Card'
import { FormatDate } from '@shared/ui/Date'
interface Props {
    card: INews
}
export const NewsCard = ({card}: Props) => {
    return <Card name={card.title} image={card.image} link={`/news/${card.id}`} >
        <div className={classes.content}>
            <p className={classes.text} >
                {card.title}
            </p>
            <FormatDate className={classes.date} date={card.date} />
        </div>
    </Card>
}