import classes from './clients.module.scss'
import useTranslation from 'next-translate/useTranslation'
import { Section } from '@shared/ui/Section'
import { ButtonMore } from '@shared/ui/ButtonMore'
import { clientsData } from '@widgets/clients/const/clientsData'
import Image from 'next/image'
import { ProjectsDate } from '@widgets/projects/const/ProjectsDate'
import Link from 'next/link'

export const СlientsSection = () => {
    const { t } = useTranslation('common')

    return <Section 
    name={'Партнеры'}
    // buttonMore={<ButtonMore name={t('viewAllProjects')} link='/projects' />}
    >
        <ul className={classes.list}>
            {ProjectsDate.map((item) => (
                <li key={item.id} className={classes.item} data-id={item.id}>
                    <div className={classes.bl_image}>
                        <Image
                            src={item.image}
                            layout="fill"
                            objectFit="contain"
                            alt={item.name}
                            className={classes.image}
                        />
                    </div>
                    <Link
                        className={classes.item_body}
                        href={item.link ?? '/'}
                        target="_blank"
                    >
                        <p className={classes.item_text}>{item.name}</p>
                    </Link>
                </li>
            ))}
        </ul>
</Section>
}