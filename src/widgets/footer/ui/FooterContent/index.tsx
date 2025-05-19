'use client'
import Link from 'next/link'
import classes from './footer-content.module.scss'
import { HandySvg } from 'handy-svg'
import useTranslation from 'next-translate/useTranslation'
import { useQuery } from 'react-query'
import { IResidences } from '@widgets/projects/model/IProjectCard'
import { getFetcher } from '@shared/api/fetcher/getFetcher'
import { useRouter } from 'next/router'
import { contactsData } from '@shared/const/contacts'
import { Button } from '@shared/ui/Button'
import { useApplicationStore } from '@widgets/application/model/applicationStore'
import { menuList } from '@widgets/header/consts/menuList'
import Image from 'next/image'


const TypeContacts:IItem[] = [
    {
        id: 12,
        name: "one-room",
        link: "/apartments/?room_count=1"
    },
    {
        id: 2,
        name: "two-room",
        link: "/apartments/?room_count=2"
    },
    {
        id: 3,
        name: "three-room",
        link: "/apartments/?room_count=3"
    },
]
const AboutContacts:IItem[] = [
    {
        id: 12,
        name: 'news',
        link: '/news'
    },
    {
        id: 2,
        name: 'company',
        link: '/about'
    },
    {
        id: 3,
        name: 'payment',
        link: '/payment'
    },
]
const DataContacts:IItem[] = [
    {
        id: 12,
        name: '+992 900 00 00 00',
        link: 'asd'
    },
    {
        id: 2,
        name: 'exaple@gmail.com',
        link: 'asd'
    },
    {
        id: 3,
        name: 'Инстаграм',
        link: 'asd'
    },
]

interface IItem {
    id: number 
    name: string 
    link: string
}

export const FooterContent = () => {
    const { t } = useTranslation('common')
    const { toggle } = useApplicationStore((state) => (state))

   
    return <div className={classes.footer} >
    <div className={classes.left} >
        <div className={classes.left_body} >
            <Link href='/'>
                <Image 
                    className={classes.link_svg}
                    src='/assets/icons/logo.svg'  
                    width={100}
                    height={50}
                    alt={'logo'}
                    />
            </Link>
            <div className={classes.info_items}>
                {contactsData.gmail && (
                    <a className={classes.info_item} href={`mailto:${contactsData.gmail.link}`}>
                    {contactsData.gmail.name}
                    </a>
                )}
                {contactsData.phone && (
                    <a className={classes.info_item} href={`tel:${contactsData.phone.link}`}>
                    {contactsData.phone.name}
                    </a>
                )}
                {/* {contactsData.address && (
                    <a className={classes.info_item} href={contactsData.address.link}>
                    {contactsData.address.name}
                    </a>
                )} */}
            </div>
            <Button 
                className={classes.button} 
                // variant='outlined' 
                bg='secondary' 
                buttonSize='medium' 
                onClick={toggle}
                >
                {t('requestCall')}
            </Button>
        </div>
    </div>
    <div className={classes.right} >
        <div className={classes.right_body} >
            <div className={classes.nav}>
                <ul className={classes.list}>
                {menuList.map(({ href, name }) => (
                    <li
                    key={href}
                    className={classes.item}
                    >
                    <Link
                        href={href}
                        className={classes.link}
                    >
                        {name}
                        {/* {t(`menu:${name}`)} */}
                    </Link>
                    </li>
                ))}
                </ul>
            </div>
        </div>
    </div>
</div>
}

