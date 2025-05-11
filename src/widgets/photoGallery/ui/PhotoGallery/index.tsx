import { Gallery, IGallery } from '@shared/ui/Gallery'
import classes from './photo-gallery.module.scss'
import Tabs from '@shared/ui/Tabs/Tabs'
import { useState } from 'react'
import { Section } from '@shared/ui/Section'
import { IProjectCard } from '@widgets/projects/model/IProjectCard'
import useTranslation from 'next-translate/useTranslation'

interface Props {
    residences?: IProjectCard[]
}
export const PhotoGallery = ({residences}: Props) => {
    const { t } = useTranslation('common')
    const [activeId, setActiveId] = useState<number| null>(residences?.[0]?.id ?? 1)
    if(!residences) {
        return null
    }

    return <div className={classes.asd}>
        <Section name={t('galleryProjectsTitle')} > 
            <Tabs 
                headers={residences}
                activeId={activeId}
                selectTab={setActiveId}
                >
                    {residences.find((item) => item.id == activeId) && <Gallery
                    images={residences.find((item) => item.id === activeId)?.gallery_images ?? []}
                    />}
            </Tabs>
        </Section>
    </div>
}

   