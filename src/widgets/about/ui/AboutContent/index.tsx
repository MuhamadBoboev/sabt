import classes from './about-content.module.scss'
import { Wrapper } from '@shared/ui/Wrapper'
import { Button } from '@shared/ui/Button'
import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'
import { Title } from '@shared/ui/title'
import Link from 'next/link'
import clsx from 'clsx'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ButtonMore } from '@shared/ui/ButtonMore'
import { Card } from '@shared/ui/Card'
import { Team } from '../Team'
import { SolutionsSection } from '@widgets/solutions'

export const AboutContent = () => {
    const { t } = useTranslation()

   

    
    return <Wrapper className={classes.wrapper}>
        <div>
            <div>
                <h2>Наши проекты</h2>
                <div>
                    Мы гордимся работой, которую делаем. Вот несколько примеров наших успешных кейсов:
                    <ul> 
                        <li><strong>Сеть ресторанов</strong> – разработали сайт с онлайн-бронированием и интеграцией онлайн-эквайринга. Улучшили конверсию заказов на 40%.</li> 
                        <li><strong>Интернет-магазин техники</strong> – создали интернет-магазин с интеграцией платежных систем и CRM. В результате – рост продаж на 60% за 6 месяцев.</li> 
                        <li><strong>Медицинская клиника</strong> – продвинули клинику в соцсетях, разработали маркетинговую стратегию, что увеличило поток клиентов на 35%.</li> 
                        <li><strong>IT-стартап</strong> – создали уникальный UI/UX-дизайн и разработали мобильное приложение с нуля.</li> 
                        <li><strong>Крупный логистический оператор</strong> – разработали внутреннюю CRM-систему, автоматизировав процессы работы с клиентами и партнерами.</li> 
                        <li><strong>Производственная компания</strong> – создали корпоративный сайт и систему онлайн-заявок, что помогло увеличить объем заказов на 50%.</li> 
                        <li><strong>Банк</strong> – внедрили онлайн-эквайринг и разработали веб-интерфейс для удобного управления платежами.</li> 
                        <li><strong>Телекоммуникационная компания</strong> – оптимизировали цифровую платформу, внедрив новые инструменты аналитики и автоматизации.</li> </ul>
                </div>
            </div>
            <div className={classes.why}>
                <h2>Почему стоит работать с нами?</h2>
                <div>
                    💼 Более 2 лет опыта в digital-маркетинге, дизайне и разработке
                    <br></br>
                    💡 Креативный и технический подход – объединяем эстетику и функциональность
                    <br></br>
                    🚀 Гарантированный результат – мы ориентируемся на успех клиентов
                    <br></br>
                    🔍 Прозрачная работа – отчетность на каждом этапе проекта
                </div>
            </div>
            <Button variant='contained'>
                <Link className={classes.href} href={'https://t.me/sabttelegram'} target='_blank'>
                    Свяжитесь с нами
                </Link>
            </Button>
        </div>
    </Wrapper>
}
