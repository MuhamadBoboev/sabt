import { useRef, useState } from 'react';
import { PageHeader } from '@shared/ui/PageHeader';
import { Breadcrumbs } from '@shared/ui/Breadcrumbs';
import { Button } from '@shared/ui/Button';
import { Form } from '../Form';
import { motion } from 'framer-motion';
import useTranslation from 'next-translate/useTranslation';
import Head from 'next/head';
import classes from './services.module.scss';
import { ButtonMore } from '@shared/ui/ButtonMore';
import { forWhomData } from '@widgets/services/const/serviceData';

// SEO-компонент
const SEO = () => (
    <Head>
        <title>СММ, создание сайтов, маркетинг и продвижение — Услуги</title>
        <meta name="description" content="Профессиональные услуги: СММ, сайты, маркетинг, брендинг, реклама и SEO." />
    </Head>
);

// Анимационный блок
const AnimatedItem = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay }}>
        {children}
    </motion.div>
);

export const Services = () => {
    const { t } = useTranslation('common');
    const formRef = useRef<HTMLDivElement>(null);
    const sectionRefs = useRef<{ [key: string]: HTMLLIElement | null }>({});

    // Функция для плавного скролла к секции
    const scrollToSection = (id: string) => {
        sectionRefs.current[id]?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <SEO />

            <PageHeader
                className={classes.servicesSection}
                name={'Услуги'}
                mainTitle
                lastSection
                breadcrumbs={<Breadcrumbs items={[{ label: 'Услуги', isActive: true }]} includeHome />}
            >
                <nav aria-label={'servicesNavigation'} className={classes.servicesNav}>
                    <h2 className="visually-hidden">Список услуг</h2>
                    <ul className={classes.navItems}>
                        {forWhomData.map(({ id, name }) => (
                            <li key={id} className={classes.navItem}>
                                <button
                                    onClick={() => scrollToSection(String(id))}
                                    className={classes.navLink}
                                    aria-label={`${t('goToService')} ${name}`}
                                >
                                    {name}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>

                <section className={classes.servicesContent}>
                    <h1 className={classes.servicesTitle}>{'Поехали!'}</h1>
                    <ul className={classes.servicesList}>
                        {forWhomData.map(({ id, name, description, services, link, linkText }) => (
                            <AnimatedItem key={id}>
                                <li
                                    id={String(id)}
                                    ref={(el: HTMLLIElement | null) => {
                                        sectionRefs.current[id] = el;
                                    }}
                                    className={classes.serviceItem}
                                >
                                    <header className={classes.serviceHeader}>
                                        <h2 className={classes.serviceTitle}>{name}</h2>
                                        {link && linkText ? <ButtonMore link={link} name={linkText} /> : <p className={classes.serviceDescription}>{description}</p>}
                                    </header>

                                    <ul className={classes.serviceSublist}>
                                        {services.map(({ name, description }, index) => (
                                            <AnimatedItem key={index} delay={index * 0.1}>
                                                <li className={classes.serviceSubitem}>
                                                    <div className={classes.serviceNumber}>0{index + 1}</div>
                                                    <div>
                                                        <h3>{name}</h3>
                                                        <p>{description}</p>
                                                    </div>
                                                </li>
                                            </AnimatedItem>
                                        ))}
                                    </ul>

                                    <div className={classes.serviceCta}>
                                        <Button onClick={() => formRef.current?.scrollIntoView({ behavior: 'smooth' })} bg="secondary" buttonSize="large">
                                            Начать сотрудничество
                                        </Button>
                                    </div>
                                </li>
                            </AnimatedItem>
                        ))}
                    </ul>
                </section>

                <section ref={formRef} className={classes.contactForm}>
                    <h2 className="visually-hidden">Форма заявки на услуги</h2>
                    <Form />
                </section>
            </PageHeader>
        </>
    );
};
