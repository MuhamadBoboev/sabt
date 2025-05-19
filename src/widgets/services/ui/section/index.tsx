import { Section } from '@shared/ui/Section';
import classes from './section.module.scss';
import { ButtonMore } from '@shared/ui/ButtonMore';
import useTranslation from 'next-translate/useTranslation';
import { forWhomData } from '@widgets/services/const/serviceData';
import { Card } from '../card';
import { useApplicationStore } from '@widgets/application/model/applicationStore';
import { Button } from '@shared/ui/Button';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export const ServicesSection = () => {
    const { t } = useTranslation('common');
    const { toggle } = useApplicationStore(state => state);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.9, y: 20 },
        visible: (index: number) => ({
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                delay: index * 0.1,
                type: 'spring',
                stiffness: 200,
                damping: 15,
            },
        }),
    };

    const buttonVariants = {
        hover: { scale: 1.05, transition: { duration: 0.3 } },
        tap: { scale: 0.95, transition: { duration: 0.1 } },
    };

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // Отключаем наблюдатель после срабатывания
                }
            });
        });

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <Section 
            ref={sectionRef}
            className={classes.section}
            name={'Для кого сервис?'}
        >
            <div className={classes.items}>
                {forWhomData.map((item, index) => (
                    <motion.div
                        key={item.id}
                        variants={cardVariants}
                        initial="hidden"
                        animate={isVisible ? "visible" : "hidden"} // Анимация при появлении
                        custom={index}
                    >
                        <Card item={item} index={index} />
                    </motion.div>
                ))}
            </div>
            <div className={classes.bl_button}>
                <motion.div
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                >
                    <Button
                        className={classes.button}
                        buttonSize='large'
                        // onClick={toggle}
                    >
                        <Link className={classes.link} href={'https://t.me/sabttelegram'} target='_blank'>
                            Написать в TG
                        </Link>
                    </Button>
                </motion.div>
            </div>
        </Section>
    );
};
