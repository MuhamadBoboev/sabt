import { NewsSection } from "@widgets/news"
import { ProjectsSection } from "../ProjectsSection"
import classes from './projects.module.scss'
import { Breadcrumbs } from "@shared/ui/Breadcrumbs"
import { Wrapper } from "@shared/ui/Wrapper"
import { IProjectCard } from "@widgets/projects/model/IProjectCard"
import { INews } from "@widgets/news/model/News"
import useTranslation from "next-translate/useTranslation"
import { PageHeader } from "@shared/ui/PageHeader"

export const Projects = () => {
    const { t } = useTranslation('common')

    return <PageHeader 
    className={classes.section}
    name={'Портфолио'}
    mainTitle
    lastSection
    breadcrumbs={ 
        <Breadcrumbs
        className={classes.breadcrumbs}
        items={[
            {label: 'Портфолио', isActive: true}
        ]}
        includeHome
        /> }
    >
        <ProjectsSection />
    </PageHeader>
}