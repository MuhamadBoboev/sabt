import { Wrapper } from '@shared/ui/Wrapper'
import classes from './news.module.scss'
import { Breadcrumbs } from '@shared/ui/Breadcrumbs'
import { Section } from '@shared/ui/Section'
import { NewsCard } from '../NewsCard'
import { INews } from '@widgets/news/model/News'
import useTranslation from 'next-translate/useTranslation'

interface Props {
    news?: INews[]
}

export const News = ({news}: Props) => {
    const { t } = useTranslation('common')
    if(!news) {
        return null
    }

    return <div className={classes.news}>
            <Wrapper className={classes.wrapper} >
                <Breadcrumbs
                    className={classes.breadcrumbs}
                    items={[{label: (t('news')), isActive: true}]}
                    includeHome
                    />
            </Wrapper>
            <Section name={t('news')} >
                <ul className={classes.items}>
                    {news.map((item) => 
                    <NewsCard 
                        key={item.id} 
                        card={item} 
                        /> )}
                </ul>
            </Section>
        </div>
}