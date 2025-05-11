import { Section } from '@shared/ui/Section'
import classes from './vacancies.module.scss'
import { Breadcrumbs } from '@shared/ui/Breadcrumbs'
import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'
import { vacanciesData } from '@widgets/vacancies/const/vacanciesData'
import { PageHeader } from '@shared/ui/PageHeader'
import { ApplicationForm } from '@widgets/application'
import { Form } from '../Form'
import clsx from 'clsx'


export const Vacancies = () => {
    const { t } = useTranslation('common')

    return <>
        <PageHeader 
            className={classes.section}
            name={<>{t('Вакансии')}</> }
            mainTitle
            lastSection
            breadcrumbs={ 
                <Breadcrumbs
                className={classes.breadcrumbs}
                items={[
                    {label: 'Вакансии', isActive: true}
                ]}
                includeHome
                /> }
            >
                <h2>Присоединяйся к команде Webrand!</h2>
                <p className={classes.text} >
                    Мы — динамично развивающееся цифровое агентство, специализирующееся на веб-разработке, дизайне и интернет-маркетинге. Если ты увлечен технологиями, креативом и хочешь работать над интересными проектами вместе с профессионалами, тогда мы ждем тебя!
                    <br/>
                    Что мы предлагаем:
                    <br/>
                    {/* {t('payment_text')} */}
                </p>
                <ul className={clsx(classes.text, classes.info_list)}>
                    <li>
                    Участие в крупных и интересных проектах для бизнеса.
                    </li>
                    <li>
                    Дружную и поддерживающую команду.
                    </li>
                    <li>
                    Возможность для профессионального роста и развития.
                    </li>
                    <li>
                    Гибкий график работы и возможность удаленной работы.
                    </li>
                </ul>
                <div className={classes.items} >
                    {vacanciesData?.map((item, index) => <div key={index} className={classes.item} >
                        <div className={classes.bl_image} >
                            <Image 
                                className={classes.image}
                                src={'/assets/icons/vacancy.png'}
                                width={100}
                                height={150}
                                alt='vacancy'
                                />
                        </div>
                        <p className={classes.name} >
                            {item.title}
                        </p>
                    </div>)}
                </div>
                <div className={classes.form}>
                    <Form />
                </div>
        </PageHeader>
    </>
}