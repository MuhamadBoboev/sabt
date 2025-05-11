import { Section } from '@shared/ui/Section'
import classes from './news-section.module.scss'
import { NewsMiniCard } from '../NewsMiniCard'
import { Swiper, SwiperSlide } from 'swiper/react'
import { ButtonMore } from '@shared/ui/ButtonMore'
import { INews } from '@widgets/news/model/News'
import useTranslation from 'next-translate/useTranslation'

interface Props {
    news?: INews[]
}

export const NewsSection = ({news}: Props) => {
    const { t } = useTranslation('common')

    if(!news) {
        return null
    }
    return <Section 
        name={t('news')}
        buttonMore={
            <ButtonMore name={t('viewAllNews')} link='/news' />
        }
        lastSection
        >
        <Swiper
            className={classes.Swiper}
            slidesPerView={1.2}
            spaceBetween={20}
            breakpoints={{
                1360: {
                    spaceBetween: 40,
                    slidesPerView: 4.1
                },
                1024: {
                    spaceBetween: 24,
                    slidesPerView: 3
                },
                600: {
                    spaceBetween: 24,
                    slidesPerView: 2
                },
            }}
				>
					{news.map((item) => (
						<SwiperSlide
							key={item.id}
							className={classes.Slide}
						>
                            <NewsMiniCard item={item}/>
						</SwiperSlide>
					))}
				</Swiper>
    </Section>
}