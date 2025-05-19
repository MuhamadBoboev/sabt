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
]

const whyData = [
    {
        title: 'Удобство',
        text: 'Сервис позволяет записываться на услуги в любое время — дома, в офисе или в дороге.',
        image: '/assets/images/banner-mobile-1.jpg',
    },
    {
        title: 'Экономия времени',
        text: 'Больше не нужно звонить и ждать ответа. Вся информация доступна в приложении.',
        image: '/assets/images/banner-mobile-1.jpg',
    },
    {
        title: 'Надёжность',
        text: 'Выбирайте проверенных специалистов с реальными отзывами и рейтингами.',
        image: '/assets/images/banner-mobile-1.jpg',
    },
]


export const Sabt = () => {
    const { toggle } = useApplicationStore((state) => (state))

    return <>
        <>
        <Section className={classes.section} name wrapperProps={{ className: classes.wrapper }}>
            <div className={classes.section_body}>
                <Title className={classes.title}>
                    SABT — умное бронирование услуг в Таджикистане
                </Title>
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
        <Section name wrapperProps={{ className: classes.wrapper }}>
            <div className={classes.section_body}>
                <Title className={classes.title}>
                    Как это работает
                </Title>    
                <Timeline />
            </div>
        </Section>
        <Section name className={classes.section} wrapperProps={{ className: classes.wrapper }}>
            <div className={classes.section_body}>
                <Title className={classes.title}>
                    Для кого сервис?
                </Title>
            </div>
                <div className={classes.service_items}>
                    <div className={classes.service_item}>
                <div className={classes.item_icon}>
                    <Image src={'/assets/images/banner-mobile-1.jpg'} alt='Для клиентов' width={100} height={100} />
                </div>
                <div className={classes.item_text}>
                    <h3 className={classes.item_title}>Для клиентов</h3>
                    <p className={classes.text}>Ищите услуги рядом с вами, сравнивайте предложения и бронируйте за пару кликов.</p>
                </div>
            </div>
            <div className={classes.service_item}>
                <div className={classes.item_icon}>
                    <Image src={'/assets/images/banner-mobile-1.jpg'} alt='Для бизнеса' width={100} height={100} />
                </div>
                <div className={classes.item_text}>
                    <h3 className={classes.item_title}>Для бизнеса</h3>
                    <p className={classes.text}>Управляйте расписанием, клиентами и записями в одном месте. SABT поможет вам увеличить поток клиентов и упростить работу.</p>
                </div>
            </div>

            </div>
        </Section>
        <Section name wrapperProps={{ className: classes.wrapper }}>
            <div className={classes.section_body}>
                <Title className={classes.title}>
                    Отзывы клиентов
                </Title>  
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
                <Button className={classes.review_button}>
                    Оставить отзыв
                </Button>                    
        </Section>
        <Section name wrapperProps={{ className: classes.wrapper }}>
            <div className={classes.section_body}>
                <Title className={classes.title}>
                    Почему SABT?
                </Title>  
                </div>
                <div className={classes.service_items}>
                    {whyData.map((item, index) => (
                        <div key={index} className={classes.service_item}>
                            <div className={classes.item_icon}>
                                <Image src={'/assets/images/banner-mobile-1.jpg'} alt='image' width={100} height={100} />
                            </div>
                            <div className={classes.item_text}>
                                <h3 className={classes.item_title}>{item.title}</h3>
                                <p className={classes.text}>{item.text}</p>
                            </div>
                        </div>
                    ))}
            </div>                  
        </Section>
        <Section className={classes.section} name wrapperProps={{ className: classes.wrapper }}>
            <div className={classes.section_body}>
                <Title className={classes.title}>
                    Партнёрам 
                </Title>  
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
        </>
    </>
}