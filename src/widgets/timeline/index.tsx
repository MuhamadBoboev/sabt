import clsx from 'clsx';
import classes from './timeline.module.scss';
import { Section } from '@shared/ui/Section';
import Image from 'next/image';

const timelineData = [
  {
    title: '1. Салон подключается к SABT',
    text: 'Бизнес регистрируется на платформе, добавляет информацию о себе, специалистах, услугах и графике работы.',
    image: '/assets/images/stages/stage_1.png',
  },
  {
    title: '2. Размещение ссылки',
    text: 'Салон размещает ссылку на онлайн-запись в Instagram, WhatsApp, на сайте или других соцсетях.',
    image: '/assets/images/stages/stage_2.png',
  },
  {
    title: '3. Клиент переходит по ссылке',
    text: 'Потенциальный клиент нажимает на ссылку и попадает на страницу онлайн-записи конкретного салона.',
    image: '/assets/images/stages/stage_3.png',
  },
  {
    title: '4. Выбор услуги',
    text: 'Клиент выбирает нужную категорию и конкретную услугу из списка, представленного салоном.',
    image: '/assets/images/stages/stage_4.png',
  },
  {
    title: '5. Выбор специалиста',
    text: 'Клиент видит всех доступных мастеров и может выбрать специалиста по рейтингу, опыту или свободному времени.',
    image: '/assets/images/stages/stage_5.png',
  },
  {
    title: '6. Выбор даты и времени',
    text: 'Открывается календарь с доступными слотами. Клиент выбирает удобное время.',
    image: '/assets/images/stages/stage_6.png',
  },
  {
    title: '7. Ввод контактных данных',
    text: 'Клиент вводит своё имя и номер телефона для подтверждения записи.',
    image: '/assets/images/stages/stage_7.png',
  },
  {
    title: '8. Подтверждение записи',
    text: 'После ввода данных клиент получает подтверждение записи по SMS или на экране. Салон видит запись в своём расписании.',
    image: '/assets/images/stages/stage_8.png',
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
                    src={item.image} 
                    alt='image' 
                    width={500}
                    height={500}
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
