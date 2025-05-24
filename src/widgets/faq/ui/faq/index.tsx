import { Section } from '@shared/ui/Section'
import classes from './vacancies.module.scss'
import { Breadcrumbs } from '@shared/ui/Breadcrumbs'
import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'
import { vacanciesData } from '@widgets/faq/const/vacanciesData'
import { PageHeader } from '@shared/ui/PageHeader'
import { ApplicationForm } from '@widgets/application'
import { Form } from '../Form'
import clsx from 'clsx'
import { Button } from '@shared/ui/Button'
import Link from 'next/link'

const questionData = [
  {
    title: 'Как работает SABT?',
    text: 'SABT — это платформа, которая позволяет пользователям легко и удобно записываться на услуги в различных сферах, таких как медицина, красота, фитнес и другие. Мы стремимся сделать процесс записи максимально простым и доступным для всех.',
  },
  {
    title: 'Как оставить отзыв?',
    text: 'Пожалуйста, зайдите на главную страницу, перейдите в секцию “Отзывы” и нажмите на кнопку, чтобы оставить своё мнение о нашей платформе. Мы ценим вашу обратную связь и всегда стремимся к улучшениям!',
  },
  {
    title: 'Как подключить бизнес?',
    text: 'Свяжитесь с нами любым удобным для вас способом, и мы сами подключим всё за вас',
  },
  {
    title: 'Сколько это стоит?',
    text: 'Мы предлагаем гибкие тарифы: от бесплатного пробного периода до профессиональных решений. Вы можете начать бесплатно и перейти на платный план, когда будете готовы.',
  },
  {
    title: 'Нужно ли устанавливать приложение?',
    text: 'Нет, ничего устанавливать не нужно. Вся работа происходит в удобной веб-панели, доступной с любого устройства: телефона, планшета или компьютера.',
  },
  {
    title: 'Могут ли клиенты записываться без звонков?',
    text: 'Да! SABT позволяет клиентам записываться онлайн в любое удобное время без звонков и ожидания ответа.',
  },
  {
    title: 'Как я буду получать уведомления о записях?',
    text: 'Каждое бронирование сопровождается уведомлением по SMS и в Telegram, а также отображается в личной панели.',
  },
  {
    title: 'Могу ли я отменить или перенести запись?',
    text: 'Конечно! Вы в любое время можете изменить или отменить запись клиента в своей панели управления.',
  },
  {
    title: 'Какие преимущества для администратора салона?',
    text: 'Автоматическое ведение записей, минимизация ошибок, меньше звонков и путаницы. Ваш администратор начнёт работать в 2 раза эффективнее.',
  },
  {
    title: 'Как быстро можно начать пользоваться?',
    text: 'Регистрация занимает всего 2–3 минуты. Сразу после этого вы можете добавить услуги, сотрудников и начать принимать записи.',
  },
  {
    title: 'Какие гарантии вы даёте?',
    text: 'Мы заинтересованы в вашем успехе. Предоставляем техническую поддержку, обучающие материалы и помощь при настройке.',
  },
  {
    title: 'Есть ли техподдержка?',
    text: 'Да! Мы предоставляем круглосуточную поддержку через телефон, Telegram, Instagram, WhatsApp и email. Поможем на любом этапе подключения и использования.',
  }
];


export const Faq = () => {
    const { t } = useTranslation('common')

    return <>
        <PageHeader 
            className={classes.section}
            name={<>{t('Вопросы')}</> }
            mainTitle
            lastSection
            breadcrumbs={ 
                <Breadcrumbs
                className={classes.breadcrumbs}
                items={[
                    {label: 'Вопросы', isActive: true}
                ]}
                includeHome
                /> }
            >
                <ul className={classes.question_items}>
                    {questionData.map((e, index) => <li key={index} className={classes.question_item}>
                        <h3 className={classes.question_title}>
                            {e.title}
                        </h3>
                        <p className={classes.question_text}>
                            {e.text}
                        </p>
                    </li>)}
                </ul>

                <div className={classes.form}>
                    <Form />
                </div>
        </PageHeader>
    </>
}