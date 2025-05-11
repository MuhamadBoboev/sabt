import { Wrapper } from '@shared/ui/Wrapper'
import classes from './news-slug.module.scss'
import { Breadcrumbs } from '@shared/ui/Breadcrumbs'
import { Section } from '@shared/ui/Section'
import Image from 'next/image'
import { FormatDate } from '@shared/ui/Date'
import { useWindowSize } from '@uidotdev/usehooks'
import { INews } from '@widgets/news/model/News'
import { NewsCard } from '../NewsCard'
import useTranslation from 'next-translate/useTranslation'

interface Props {
    news?: INews[] | null
    newsSlug?: INews | null
}

export const NewsSlug = ({news, newsSlug}: Props) => {
    const size = useWindowSize()
    const { t } = useTranslation('common')

    if(!newsSlug) {
        return null
    }

    let amountItems = size.width && size.width > 768 ? 3 : 4 
    return <div className={classes.news}>
        <Section 
            className={classes.section}
            name={newsSlug.title}
            mainTitle
            breadcrumbs={ 
                <Breadcrumbs
                className={classes.breadcrumbs}
                items={[
                    {label: (t('news')), link: '/news'},
                    {label: (t('more')), isActive: true}
                ]}
                includeHome
                /> }
            >
                {newsSlug.image && <div className={classes.bl_img} >
                    <Image 
                        src={newsSlug.image}
                        width={1500}
                        height={800}
                        alt='news'
                        />
                </div>}
        </Section>
        <Wrapper>
            <div className={classes.body} >
                <div className={classes.bl_text} >
                   {newsSlug.description}
                </div>
                <FormatDate date={newsSlug.date} />
            </div>

            <div className={classes.items} >
                {news && news?.slice(0, amountItems).map((item) => <NewsCard key={item.id} card={item} />)}
            </div>
        </Wrapper>
    </div>
}