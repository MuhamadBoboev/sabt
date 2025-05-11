import classes from './projects-slug.module.scss'
import { Breadcrumbs } from "@shared/ui/Breadcrumbs"
import { Section } from "@shared/ui/Section"
import { Gallery } from "@shared/ui/Gallery"
import { IGallery } from "@shared/model/IGallery"
import { ProjectInfo } from '../ProjectInfo'
import clsx from 'clsx'
import { IProjectCard } from '@widgets/projects/model/IProjectCard'
import useTranslation from 'next-translate/useTranslation'

const galleryDate: IGallery[] = [
    {
        id: 1,
        img: '/assets/images/gallery_1.png'
    },
    {
        id: 2,
        img: '/assets/images/gallery_1.png'
    },
    {
        id: 3,
        img: '/assets/images/gallery_1.png'
    },
    {
        id: 4,
        img: '/assets/images/gallery_1.png'
    },
]

interface Props {
    project?: IProjectCard | null
}


export const ProjectsSlug = ({project}: Props) => {
    const { t } = useTranslation('common')

    return <div className={classes.wrapper}>
        <Section 
            className={classes.section}
            name={project?.title}
            mainTitle
            breadcrumbs={ 
                <Breadcrumbs
                className={classes.breadcrumbs}
                items={[
                    {label: (t('projects')), link: '/projects'},
                    {label: (t('more')), isActive: true}
                ]}
                includeHome
                /> }
            >
                {project?.gallery_images && <Gallery
                    className={classes.gallery}
                    images={project?.gallery_images}
                    />}
                <div className={classes.content}>
                    <div className={classes.left} >
                        <div className={classes.body} >
                            <div className={classes.items} >
                                {project?.type && <div className={classes.item} >
                                    <p style={{color: project.type_color}} >
                                        {project?.type}
                                    </p>
                                </div>}
                                {project?.quantity_rooms && <div className={classes.item}>
                                    <p>
                                        {project?.quantity_rooms}
                                    </p>
                                </div>}
                                {project?.status && <div className={clsx(classes.item, classes.item_status)}>
                                    <p>
                                        {project?.status}
                                    </p>
                                </div>}
                            </div>
                            <div className={classes.bl_text} >
                                {project?.description}
                            </div>
                        </div>
                    </div>
                    <div className={classes.right}>
                        <ProjectInfo project={project} />
                    </div>
                </div>
        </Section>
    </div>
}