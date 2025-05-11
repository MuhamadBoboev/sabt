import classes from './projects-section.module.scss'
import { useWindowSize } from '@uidotdev/usehooks'
import useTranslation from 'next-translate/useTranslation'
import { ProjectsDate, ProjectsDateWebSite } from '@widgets/projects/const/ProjectsDate'
import { Gallery } from '@shared/ui/Gallery'
import { useState } from 'react'
import Tabs from '@shared/ui/Tabs/Tabs'
import Link from 'next/link'
import { SectionTitle } from '@shared/ui'

export const ProjectsSection = () => {
    const size = useWindowSize();
    const { t } = useTranslation('common')

    const [activeId, setActiveId] = useState<number| null>(0)
    
    return <div className={classes.section}>
        {/* {ProjectsDate.map((item, index) => <div key={index}>
                <div className={classes.item} >
                    <ProfileCard item={item} />
                </div>
            </div>)} */}
            <Tabs 
                headers={ProjectsDateWebSite.filter((item) => item.image).map((item, index) =>  ({id: index, title: item.name }))}
                activeId={activeId}
                selectTab={setActiveId}
                >
                    {ProjectsDateWebSite.find((item, index) => index == activeId) && <Gallery
                    images={ProjectsDateWebSite.find((item, itemIndex) => itemIndex === activeId)?.images ?? []}
                    />}
            </Tabs>
            <div className={classes.content}>
                <SectionTitle title='СММ-продвижение' />
                <ul className={classes.list} >
                    {ProjectsDate.map((item) => 
                    <li key={item.id} className={classes.item}>
                        <Link 
                            className={classes.item_body} 
                            href={item.link ?? '/'} 
                            target='_blank'
                            >
                            <p className={classes.item_text}>
                            {item.name}
                            </p>
                        </Link>
                    </li>
                    )}
                </ul>
            </div>
    </div>
}