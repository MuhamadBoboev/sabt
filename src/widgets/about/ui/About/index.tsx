import classes from './about.module.scss'
import { AboutContent } from '../AboutContent'
import useTranslation from 'next-translate/useTranslation'
import { SolutionsSection } from '@widgets/solutions'
import { Team } from '../Team'
import { Wrapper } from '@shared/ui/Wrapper'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Timeline from '@widgets/timeline'
import { Breadcrumbs } from '@shared/ui/Breadcrumbs'


export const About = () => {
    const { t } = useTranslation('aboutCompany')

    const { ref, inView } = useInView({
        triggerOnce: true, // Анимация срабатывает только один раз
        threshold: 0.1, // Процент видимости, при котором анимация сработает
    });

    const titleVariants = {
        hidden: { opacity: 0, scale: 0.8, y: 20 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: 'easeOut',
            },
        },
    };

    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: 'easeOut',
                delay: 0.4, // Задержка перед появлением текста
            },
        },
    };
    return <>
    <Wrapper>
        <div ref={ref} className={classes.info}>
            <motion.div 
                className={classes.bl_title}
                initial="hidden" 
                animate={inView ? "visible" : "hidden"}
                variants={titleVariants}
            >
                <h1 className={classes.title}>
                    <span>WE</span>BRAND
                </h1>
                <Breadcrumbs
                    className={classes.breadcrumbs}
                    items={[
                        {label: 'О компании', isActive: true}
                    ]}
                    includeHome
                /> 
            </motion.div>
            <motion.div 
                className={classes.bl_text}
                initial="hidden" 
                animate={inView ? "visible" : "hidden"}
                variants={textVariants}
            >
                <h1 className={classes.info_text}>
                    Мы – sabt.tj, онлайн-запись в два клика.
                </h1>
            </motion.div>
        </div>
    </Wrapper>
    <Team />
    <SolutionsSection />
    <Timeline />
    <AboutContent />
    {/* <Gallery
        className={classes.gallery}
        images={galleryDate}
        /> */}
    {/* <AboutContent /> */}
    {/* <ProjectsSection /> */}
    {/* <NewsSection news={news} /> */}
    </>
}