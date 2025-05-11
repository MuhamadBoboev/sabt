import { IProjectCard } from '@widgets/projects/model/IProjectCard'
import classes from './profile-card.module.scss'
import { HandySvg } from 'handy-svg'
import Image from 'next/image'
import Link from 'next/link'
import { IProfile } from '@widgets/projects/model/IProfile'

interface Props {
    item: IProfile
}
export const ProfileCard = ({item}: Props) => {
    return <div className={classes.card}>
        <div className={classes.left} >
            {/* <div className={classes.bl_image}>
                <Image
                    className={classes.image}
                    src={item.image} 
                    width={432}
                    height={432}
                    alt={'webrand portfolio'}
                    />
            </div> */}
        </div>
        <div className={classes.content} >
            <div className={classes.body}>
                <div className={classes.bl_subtitle} >
                    <HandySvg
                        className={classes.svg}
                        width={20}
                        height={20}
                        src='/assets/icons/news.svg' 
                        alt='news'
                        />
                    <p className={classes.subtitle} >
                        {item.name}
                    </p>
                </div>
                <h3 className={classes.title} >
                    {item.name}
                </h3>
                <div className={classes.items} >
                </div>
            </div>
        </div>
    </div>
}