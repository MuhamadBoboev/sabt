import { Section } from '@shared/ui/Section'
import classes from './contacts-page.module.scss'
import { Breadcrumbs } from '@shared/ui/Breadcrumbs'
import { ContactCard } from '../ContactCard/indx'
import { contactData } from '@widgets/contacts/const/contactsData'
import { IProjectCard } from '@widgets/projects/model/IProjectCard'
import useTranslation from 'next-translate/useTranslation'

interface Props {
    residences?: IProjectCard[]
}
export const ContactsPage = ({residences}: Props) => {

    const { t } = useTranslation('common')

    if(!residences) {
        return null
    }
    
    return <Section 
        name={t('contacts')}
        breadcrumbs={ <Breadcrumbs
            className={classes.breadcrumbs}
            items={[{label: (t('contacts')), isActive: true}]}
            includeHome
            />}
        >
    <ul className={classes.items}>
        {residences.map((contact) => 
        <ContactCard 
            key={contact.id} 
            contact={contact} 
            />)}
    </ul>
</Section>
}