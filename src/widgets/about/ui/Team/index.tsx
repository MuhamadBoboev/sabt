import classes from './team.module.scss'
import { Gallery, IGallery } from '@shared/ui/Gallery'
import useTranslation from 'next-translate/useTranslation'
import { motion } from 'framer-motion';
import { Section } from '@shared/ui/Section';

interface ITeam {
    id: number
    name: string
    img: string
    job: string
}

const teamDate: ITeam[] = [
    {
        id: 1,
        name: 'Мухаммад Бобоев',
        img: '/assets/images/team/muhammad.jpg',
        job: 'Frontend Developer',
    },
    {
        id: 2,
        name: 'Умрон Зарипова',
        img: '/assets/images/team/umron.jpg',
        job: 'SMM specialist'
    },
    {
        id: 3,
        name: 'Алишер Косимов',
        img: '/assets/images/team/alisher.jpg',
        job: 'Backend Developer'
    },
    {
        id: 4,
        name: 'Валид Абид',
        img: '/assets/images/team/valid.jpg',
        job: 'UX/UI Designer'
    }
] 

export const Team = () => {
    const { t } = useTranslation('aboutCompany')
    return  <Section name='Наша команда' className={classes.about}>
    <div className={classes.header}>
        <h2 className='asd'>
        </h2>
    </div>
    <article className={classes.team_items}>
        {teamDate.map((item) => (
            <motion.div
                className={classes.team_item}
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
                key={item.id}
            >
                <motion.div
                    className={classes.team_body}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                >
                    <img src={item.img} alt={item.name} />
                </motion.div>
                <motion.p
                    className={classes.team_name}
                    whileHover={{ scale: 1.1, color: '#0070f3' }}
                    transition={{ duration: 0.3 }}
                >
                    {item.name}
                </motion.p>
                <motion.p
                    className={classes.team_text}
                    whileHover={{ scale: 1.1, color: '#0070f3' }}
                    transition={{ duration: 0.3 }}
                >
                    {item.job}
                </motion.p>
            </motion.div>
        ))}
    </article>
</Section>
}