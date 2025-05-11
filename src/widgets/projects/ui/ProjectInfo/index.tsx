import Image from 'next/image'
import classes from './project-info.module.scss'
import { HandySvg } from 'handy-svg'
import { Button } from '@shared/ui/Button'
import { IProjectCard } from '@widgets/projects/model/IProjectCard'
import Link from 'next/link'

interface Props {
    project?: IProjectCard | null
}

export const ProjectInfo = ({project}: Props) => {
    return <div className={classes.wrapper}>
        <div className={classes.body} >
            <div className={classes.bl_img} >
                {project?.image && <Image 
                    src={project?.image}
                    width={361}
                    height={153}
                    alt='logo_company'
                />}
            </div>
            <ul className={classes.items} >
                {project?.phone && <Link href={`tel:${project?.phone}`} className={classes.item} >
                    <HandySvg 
                        src='/assets/icons/phone_2.svg' 
                        width={20}
                        height={20}
                        alt='logo_company'
                        />
                    <p>{project?.phone}</p>
                </Link>}
                {project?.address && <li className={classes.item} >
                    <HandySvg 
                        src='/assets/icons/location.svg' 
                        width={20}
                        height={20}
                        alt='logo_company'
                        />
                    <p>{project?.address}</p>
                </li>}
                {project?.completion_date && <li className={classes.item} >
                    <HandySvg 
                        src='/assets/icons/calendar.svg' 
                        width={20}
                        height={20}
                        alt='logo_company'
                        />
                    <p>{project?.completion_date}</p>
                </li>}
            </ul>
            {project?.is_residence && <Button 
                className={classes.button} 
                fullWidth
                component={Link}
                href={`/apartments/?residence_id=${project?.id}`}
                >
                Выбрать квартиру
            </Button>}
        </div>
    </div>
}