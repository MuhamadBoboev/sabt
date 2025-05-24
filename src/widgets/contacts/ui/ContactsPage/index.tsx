import { Section } from '@shared/ui/Section'
import classes from './contacts-page.module.scss'
import { Breadcrumbs } from '@shared/ui/Breadcrumbs'
import { ContactCard } from '../ContactCard'
// import { contactData } from '@widgets/contacts/const/contactsData'
import { IProjectCard } from '@widgets/projects/model/IProjectCard'
import useTranslation from 'next-translate/useTranslation'
import { contactsData } from '@shared/const/contacts'
import { contactsDataArray } from '@widgets/contacts/const/contactsData'
import { Button } from '@shared/ui/Button'
import { useApplicationStore } from '@widgets/application/model/applicationStore'

// interface Props {
//     residences?: IProjectCard[]
// }
export const ContactsPage = () => {
    const { toggle } = useApplicationStore(state => (state))
    const { t } = useTranslation('common')

    return <Section 
        name={t('contacts')}
        breadcrumbs={ <Breadcrumbs
            className={classes.breadcrumbs}
            items={[{label: (t('contacts')), isActive: true}]}
            includeHome
            />}
        >
    <ul className={classes.items}>
        {contactsDataArray.map((contact, index) => 
        <ContactCard 
            key={index} 
            name={contact.name}
            link={contact.link}
            image={contact.image}
            />
        )}
        <Button bg='secondary' onClick={() => toggle()}>
            Оставить заявку
        </Button>
    </ul>
</Section>
}