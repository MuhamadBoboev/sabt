import { IContact } from '@widgets/contacts/model/Contacts'
import classes from './contacts-card.module.scss'
import { Card } from '@shared/ui/Card'
import { IProjectCard } from '@widgets/projects/model/IProjectCard'
import Link from 'next/link'
import Image from 'next/image'
import { HandySvg } from 'handy-svg'

// interface Props {
//     contact: IProjectCard
// }

interface Props {
    name: string
    image?: string
    link: string
}

export const ContactCard = ({link, name, image}:Props) => {
    return <Link href={link} className={classes.item} target='_blank' >
        <div className={classes.content}>
            <div className={classes.icon}>
                <HandySvg
                    src={image || ''}
                    alt={name}
                    width={24}
                    height={24}
                    />
            </div>
            <h3 className={classes.title} >
                {name}
            </h3>
            {/* <p className={classes.address} >
                {'contact.address'}
            </p> */}
            {/* <p className={classes.tell} >
                {'contact.phone'}
            </p> */}
        </div>
    </Link>
}