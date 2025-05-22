import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Burger } from '@widgets/header/ui/Burger'
import { useMenuStore } from '@widgets/header/model/menuStore'
import classes from './navigation.module.scss'
import useLockBodyScroll from '@custom-react-hooks/use-lock-body-scroll'
import { Button } from '@shared/ui/Button'
import useTranslation from 'next-translate/useTranslation';
import { menuList } from '@widgets/header/consts/menuList'
import { LangButton } from '@features/LangButton'
import { HandySvg } from 'handy-svg'
import Image from 'next/image'
import { useApplicationStore } from '@widgets/application/model/applicationStore'
import { contactsData } from '@shared/const/contacts'


interface Props {}

function Navigation() {
  const pathname = usePathname()
  const { isOpen, close } = useMenuStore(({ isOpen, close }) => ({
    isOpen,
    close,
  }))
  const { toggle } = useApplicationStore(state => (state))
  const { t } = useTranslation()

  // useLockBodyScroll(isOpen);
  return (
    <nav className={clsx(classes.nav, pathname === '/' && classes.mainPage)}>
      <div className={clsx(classes.menu, isOpen && classes.open)}>
        <div className={classes.logo_bl}>
          <Link href={'/'} className={classes.logo} >
              <Image
                src={`/assets/icons/logo.svg`}
                alt="iontravel"
                width={80}
                height={20}
                priority
              />
          </Link>
          <Burger />
        </div>
        <ul className={classes.list}>
          {menuList.map(({ href, name }) => (
            <li
              key={href}
              className={classes.item}
            >
              <Link
                href={href}
                className={clsx(
                  classes.link,
                  pathname.slice(0, pathname.length-1) === href && classes.active,
                )}
                onClick={close}
              >
                {name}
                {/* {t(`menu:${name}`)} */}
              </Link>
            </li>
          ))}
        </ul>
        <div className={classes.footer} >
          <div className={classes.phone_bl} >
            <div className={classes.phone_svg}>
              <HandySvg
                src='/assets/icons/phone.svg'
                whith={24}
                height={24}
              />
            </div>
            <div className={classes.phone} >
              <a className={classes.phone_link} href={`tel:${contactsData.phone.link}`}>
                {contactsData.phone.name}
              </a>
            </div>
          </div>
        </div>
        <Button
          className={classes.button}
          onClick={() => toggle()}
        >
            {t(`common:addApplication`)}
        </Button>
        {/* <div className={classes.lang_button} >          
          <LangButton />
        </div> */}
      </div>
      <div className={clsx(classes.wrapper, isOpen && classes.open_wrapper)} ></div>
    </nav>
  )
}

export { Navigation }
