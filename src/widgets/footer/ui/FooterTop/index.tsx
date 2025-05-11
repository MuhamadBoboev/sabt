import Link from 'next/link'
import classes from './footer-top.module.scss'
import { Button } from '@shared/ui/Button'
import { HandySvg } from 'handy-svg'
import useTranslation from 'next-translate/useTranslation'
import { useApplicationStore } from '@widgets/application/model/applicationStore'

export const FooterTop = () => {
    
    const { t } = useTranslation('common')
    const { toggle } = useApplicationStore((state) => (state))

    return <div className={classes.footer_top} >
    <div className={classes.list_top} >
        <Link className={classes.link_button} href='#header'>
            <HandySvg 
                className={classes.link_svg}
                src='/assets/icons/arrow-top.svg'  
                width={44}
                height={44}
                alt={'nav top'}
                />
                {t('top')}
        </Link>
    </div>
    <div className={classes.contacts} >
        {/* <Link href={contacts.link} className={classes.tell}>
            {contacts.phone}
        </Link> */}
        <Button 
            className={classes.button} 
            // variant='outlined' 
            bg='secondary' 
            buttonSize='medium' 
            onClick={() => toggle()}
            >
            {t('requestCall')}
        </Button>
    </div>
</div>
}

