import clsx from 'clsx';
import classes from './timeline.module.scss';
import { Section } from '@shared/ui/Section';
import Image from 'next/image';


const timelineData = [
  {
    title: 'Клиент узнаёт о нас',
    text: 'Потенциальный клиент видит нашу рекламу или находит нас через поиск. Это может быть Instagram, Google или рекомендации.',
    image: '/assets/images/banner-mobile-1.jpg',
  },
  {
    title: 'Клиент заходит на сайт',
    text: 'Переходит на сайт, чтобы узнать подробности о наших услугах, портфолио, условиях работы и ценах.',
    image: '/assets/images/banner-mobile-1.jpg',
  },
  {
    title: 'Оставляет заявку',
    text: 'Через форму обратной связи или мессенджер клиент оставляет свои контактные данные и кратко описывает задачу.',
    image: '/assets/images/banner-mobile-1.jpg',
  },
  {
    title: 'Связь с менеджером',
    text: 'Наш менеджер связывается с клиентом, уточняет детали, отправляет бриф (при необходимости) и отвечает на все вопросы.',
    image: '/assets/images/banner-mobile-1.jpg',
  },
  {
    title: 'Обсуждение и согласование',
    text: 'Мы уточняем требования, предлагаем решение, рассчитываем стоимость и сроки. После согласования подписываем договор или выставляем счёт.',
    image: '/assets/images/banner-mobile-1.jpg',
  },
  {
    title: 'Начало работы',
    text: 'Команда приступает к выполнению проекта. В процессе клиент получает отчёты и может следить за этапами выполнения.',
    image: '/assets/images/banner-mobile-1.jpg',
  },
];



const Timeline = () => {
  return (
    // <Section name='История компании'>
      <div className={classes.timeline}>
        <div className={classes.outer}>
          {timelineData.map((item, index) => (
            <div key={index} className={clsx(classes.card, index % 2 === 0 ? classes.even : classes.odd)}>
              <div className={classes.info}>
                <h3 className={classes.title}>{item.title}</h3>
                <p className={classes.timeline_text}>{item.text}</p>
                <div className={classes.image}>
                  <Image 
                    src={'/assets/images/banner-mobile-1.jpg'} 
                    alt='image' 
                    width={100}
                    height={100}
                    />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    // </Section>
  );
};

export default Timeline;
