import classes from './sabt.module.scss'
import useTranslation from 'next-translate/useTranslation'
import { SolutionsSection } from '@widgets/solutions'
import { Wrapper } from '@shared/ui/Wrapper'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Timeline from '@widgets/timeline'
import { Breadcrumbs } from '@shared/ui/Breadcrumbs'
import { Title } from '@shared/ui/title';
import { Button } from '@shared/ui/Button';
import { useApplicationStore } from '@widgets/application/model/applicationStore';
import { Section } from '@shared/ui/Section';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import SliderNav from '@shared/ui/SliderNav/SliderNav';
import clsx from 'clsx';
import { ButtonMore } from '@shared/ui/ButtonMore';
import Link from 'next/link';


const reviewsData = [
    {
        name: 'Мунира Юсупова',
        text: 'Очень удобно! Записалась к врачу за пару кликов, без звонков и очередей.',
        image: '/assets/images/banner-mobile-1.jpg',
    },
    {
        name: 'Фируз Шарипов',
        text: 'Пользуюсь SABT уже несколько месяцев — удобно, быстро, никаких проблем.',
        image: '/assets/images/banner-mobile-1.jpg',
    },
    {
        name: 'Зухро Салимова',
        text: 'Идеальное решение для занятых людей. Наконец-то не забываю о записях!',
        image: '/assets/images/banner-mobile-1.jpg',
    },
    {
        name: 'Мунира Юсупова',
        text: 'Очень удобно! Записалась к врачу за пару кликов, без звонков и очередей.',
        image: '/assets/images/banner-mobile-1.jpg',
    },
    {
        name: 'Фируз Шарипов',
        text: 'Пользуюсь SABT уже несколько месяцев — удобно, быстро, никаких проблем.',
        image: '/assets/images/banner-mobile-1.jpg',
    },
    {
        name: 'Зухро Салимова',
        text: 'Идеальное решение для занятых людей. Наконец-то не забываю о записях!',
        image: '/assets/images/banner-mobile-1.jpg',
    },
]

const whyData = [
  {
    title: 'Онлайн-доступ 24/7',
    text: 'Записывайтесь на услуги в любое время суток — без звонков и очередей. Удобство всегда под рукой.',
    image: '/assets/images/why/why-1.png',
  },
  {
    title: 'Быстрая запись без ожидания',
    text: 'Выбирайте мастеров и свободные слоты — никаких согласований по телефону. Запись занимает меньше минуты.',
    image: '/assets/images/why/why-2.png',
  },
  {
    title: 'Отзывы и рейтинг специалистов',
    text: 'Читайте реальные отзывы других клиентов и выбирайте лучших по рейтингу и опыту.',
    image: '/assets/images/why/why-3.png',
  },
  {
    title: 'Напоминания и уведомления',
    text: 'Автоматические напоминания помогут не забыть о визите. Уведомления приходят прямо на телефон.',
    image: '/assets/images/why/why-4.png',
  },
  {
    title: 'История записей в одном месте',
    text: 'Сохраняйте любимых специалистов, просматривайте прошлые визиты и повторяйте запись в один клик.',
    image: '/assets/images/why/why-5.png',
  },
  {
    title: 'Управление расписанием онлайн',
    text: 'Мастера сами настраивают рабочие часы, выходные и перерывы — всё в одном приложении.',
    image: '/assets/images/why/why-6.png',
  },
  {
    title: 'Меньше пропущенных клиентов',
    text: 'Система автоматически напоминает клиенту о визите, снижая число забытых или отменённых записей.',
    image: '/assets/images/why/why-7.png',
  },
  {
    title: 'Формирование клиентской базы',
    text: 'Платформа сохраняет всех клиентов и записи, что помогает строить лояльную аудиторию.',
    image: '/assets/images/why/why-8.png',
  },
  {
    title: 'Рост за счёт отзывов и рейтинга',
    text: 'Положительные отзывы и высокая оценка помогают привлечь новых клиентов и продвигаться в выдаче.',
    image: '/assets/images/why/why-9.png',
  },
  {
    title: 'Упрощение работы администратора',
    text: 'Запись, напоминания и база клиентов автоматизированы — администратор работает быстрее и эффективнее.',
    image: '/assets/images/why/why-10.png',
  }
];

const forWhomData = [
  {
    title: 'Салоны красоты и парикмахерские',
    text: 'Онлайн-запись на стрижки, укладки, окрашивания и уход за волосами. Упрощённое управление расписанием и клиентами.',
    image: '/assets/images/for-whom/for-whom-1.png',
  },
  {
    title: 'Маникюрные и педикюрные студии',
    text: 'Автоматизация записи на ногтевой сервис. Напоминания клиентам, учёт мастеров и свободных слотов.',
    image: '/assets/images/for-whom/for-whom-2.png',
  },
  {
    title: 'Массажные кабинеты и SPA-салоны',
    text: 'Гибкое расписание для массажистов и специалистов, приём записей 24/7 и рост постоянных клиентов.',
    image: '/assets/images/for-whom/for-whom-3.png',
  },
  {
    title: 'Медицинские центры и стоматологии',
    text: 'Запись к врачам, учёт пациентов, интеграция с расписанием приёма и статистика по загруженности.',
    image: '/assets/images/for-whom/for-whom-4.png',
  },
  {
    title: 'Фитнес-тренеры и спортивные секции',
    text: 'Платформа для записи на индивидуальные тренировки, групповые занятия и занятия по расписанию.',
    image: '/assets/images/for-whom/for-whom-5.png',
  },
  {
    title: 'Автосервисы и шиномонтаж',
    text: 'Онлайн-запись на ремонт, замену шин, диагностику. Удобное управление загрузкой боксов и мастеров.',
    image: '/assets/images/for-whom/for-whom-6.png',
  },
  {
    title: 'Фотостудии и видеосъёмка',
    text: 'Бронирование съёмок, студий и оборудования через систему онлайн-записи.',
    image: '/assets/images/for-whom/for-whom-7.png',
  },
  {
    title: 'Репетиторы и образовательные курсы',
    text: 'Удобный приём заявок, управление расписанием занятий и уведомления ученикам.',
    image: '/assets/images/for-whom/for-whom-8.png',
  },
  {
    title: 'Мастера на выезд (ремонт, уборка и т.д.)',
    text: 'Организация заявок по времени и району, возможность указания специализации и цен.',
    image: '/assets/images/for-whom/for-whom-9.png',
  }
];

const questionData = [
    {
        title: 'Как работает SABT?',
        text: 'SABT — это платформа, которая позволяет пользователям легко и удобно записываться на услуги в различных сферах, таких как медицина, красота, фитнес и другие. Мы стремимся сделать процесс записи максимально простым и доступным для всех.',
    },
    {
        title: 'Как оставить отзыв?',
        text: 'Мы ценим мнение наших клиентов и всегда готовы выслушать их отзывы. SABT стремится к постоянному улучшению качества своих услуг и удовлетворению потребностей пользователей.',
    },
    {
        title: 'Как подключить бизнес?',
        text: 'Хочешь принимать брони через SABT? Подключите свой бизнес к нашей платформе и начните получать новых клиентов уже сегодня!',
    }
]

export const Sabt = () => {
    const { toggle } = useApplicationStore((state) => (state))

    return <>
        <>
        <Section className={classes.section} name='SABT — онлайн запись в 3 клика!' wrapperProps={{ className: classes.wrapper }}>
            <div className={classes.section_body}>
                <p className={classes.subtitle}>
                    SABT — это платформа, которая позволяет пользователям легко и удобно записываться на услуги в различных сферах, таких как медицина, красота, фитнес и другие. Мы стремимся сделать процесс записи максимально простым и доступным для всех.
                </p>
                <div>
                    <Button
                        bg='secondary' 
                        buttonSize='medium' 
                        onClick={toggle}
                    >
                        Начать сотрудничество
                    </Button>
                </div>
            </div>
        </Section>
        <Section name='Как это работает' wrapperProps={{ className: classes.wrapper }}>
            <div className={classes.section_body}>
                <Timeline />
            </div>
        </Section>
        <Section name='Для кого сервис' className={classes.section} wrapperProps={{ className: classes.wrapper }}>
            <div className={classes.service_items}>
                {forWhomData.map((item, index) => (
                    <div key={index} className={classes.service_item}>
                        <div className={classes.item_icon}>
                            <Image src={item.image} alt={item.title} width={100} height={100} />
                        </div>
                        <div className={classes.item_text}>
                            <h3 className={classes.item_title}>{item.title}</h3>
                            <p className={classes.text}>{item.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
        <Section name='Отзывы клиентов' wrapperProps={{ className: classes.wrapper }}>
            <div className={classes.section_body}>
                <p className={classes.subtitle}>
                    Мы ценим мнение наших клиентов и всегда готовы выслушать их отзывы. SABT стремится к постоянному улучшению качества своих услуг и удовлетворению потребностей пользователей.
                    <br />
                </p>
            </div>
            <div className={classes.reviews}>
                <Swiper
                    className={classes.Swiper}
					pagination={{
						enabled: true,
						clickable: true,
						el: '#reviews-pagination',
						bulletClass: 'slider-custom-pagination-bullet',
						bulletActiveClass: 'slider-custom-pagination-bullet-active',
					}}
					navigation={{
						enabled: true,
						nextEl: '#reviews-nav-next',
						prevEl: '#reviews-nav-prev',
					}}
					slidesPerView={1}
					spaceBetween={28}
					modules={[Pagination, Navigation]}
					breakpoints={{
						1360: {
							spaceBetween: 28,
                            slidesPerView: 3
						},
						1024: {
							spaceBetween: 20,
                            slidesPerView: 2
						}
					}}>
                    {reviewsData.map((item, index) => (
                        <SwiperSlide key={index} className={classes.review}>
                            <div className={classes.review_image}>
                                <Image src={item.image} alt='image' width={100} height={100} />
                            </div>
                            <div className={classes.review_text}>
                                <h3 className={classes.review_name}>{item.name}</h3>
                                <p className={classes.text}>{item.text}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                    </Swiper>
                    <div className={classes.Navigation} >
					<SliderNav  
						className={classes.nav_buttons}
						prevId="reviews-nav-prev"
						nextId="reviews-nav-next"
						theme='light'
						/>
    				</div>
                    <div id={'reviews-pagination'}  
                        className={clsx(
                        "slider-custom-pagination",
                        "slider-custom-pagination-light",
                        classes.bullets
                        )} >
                    </div>
            </div>
                <Button 
                    className={classes.review_button}
                    variant='outlined'
                    >
                    Оставить отзыв
                </Button>                    
        </Section>
        <Section className={classes.section} name='Партнёрам' wrapperProps={{ className: classes.wrapper }}>
            <div className={classes.section_body}>
                <p className={classes.subtitle}>
                    Хочешь принимать брони через SABT?
                    <br />
                </p>
                <Button
                    bg='secondary' 
                    buttonSize='medium' 
                    onClick={toggle}
                    >
                    Подключить бизнес
                </Button>
            </div>                  
        </Section>
        <Section name='Почему Sabt?' wrapperProps={{ className: classes.wrapper }}>
            <div className={classes.section_body}>

                </div>
                <div className={classes.service_items}>
                    {whyData.map((item, index) => (
                        <div key={index} className={classes.service_item}>
                            <div className={classes.item_icon}>
                                <Image src={item.image} alt={item.title} width={100} height={100} />
                            </div>
                            <div className={classes.item_text}>
                                <h3 className={classes.item_title}>{item.title}</h3>
                                <p className={classes.text}>{item.text}</p>
                            </div>
                        </div>
                    ))}
            </div>                  
        </Section>
        <Section name='Вопросы' className={classes.section} wrapperProps={{ className: classes.wrapper }}>
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
            <div className={classes.question_buttons}>
                <Button component={Link} href='/faq' variant='contained' bg='secondary' >
                    Посмотреть все вопросы
                </Button>
                <Button component={Link} href='/faq' variant='contained' bg='secondary' >
                    Задать вопросы
                </Button>
            </div>
        </Section>
        </>
    </>
}