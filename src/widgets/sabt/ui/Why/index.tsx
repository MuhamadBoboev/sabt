import classes from './why.module.scss'
import { Section } from '@shared/ui/Section';
import Image from 'next/image';

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
//   {
//     title: 'Отзывы и рейтинг специалистов',
//     text: 'Читайте реальные отзывы других клиентов и выбирайте лучших по рейтингу и опыту.',
//     image: '/assets/images/why/why-3.png',
//   },
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
//   {
//     title: 'Рост за счёт отзывов и рейтинга',
//     text: 'Положительные отзывы и высокая оценка помогают привлечь новых клиентов и продвигаться в выдаче.',
//     image: '/assets/images/why/why-9.png',
//   },
  {
    title: 'Упрощение работы администратора',
    text: 'Запись, напоминания и база клиентов автоматизированы — администратор работает быстрее и эффективнее.',
    image: '/assets/images/why/why-10.png',
  }
];
export const WhySection = () => {

    return  <Section name='Почему Sabt?' wrapperProps={{ className: classes.wrapper }}>
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
}