import { IContact } from '@widgets/contacts/model/Contacts'
import classes from './contacts-card.module.scss'
import { Card } from '@shared/ui/Card'
import { IProjectCard } from '@widgets/projects/model/IProjectCard'

// interface Props {
//     contact: IProjectCard
// }

interface Props {
    name: string
    image?: string
    link: string
}

export const ContactCard = ({link, name, image}:Props) => {
    return <Card link={link} image={image} name={name} >
        <div className={classes.content}>
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
    </Card>
}