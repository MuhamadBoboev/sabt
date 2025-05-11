import { useRouter } from 'next/router'
import classes from './lang-button.module.scss'
import Link from 'next/link'
import clsx from 'clsx'
import { HandySvg } from 'handy-svg'
import { useState } from 'react'
export const LangButton = () => {
  const router = useRouter()
  const listLocales = router.locales
  const localeActive = router.locale
  const langsData = [
      {
          id: 'ru',
          name: 'Русский'
      },
      {
          id: 'en',
          name: 'English'
      },
      {
          id: 'tj',
          name: 'Тоҷики'
      }
  ]

  const [activeModal, setActiveModal] = useState<boolean>(false)

  return <>
    <div className={classes.wrapper}>
      <button 
          className={classes.select_button} 
          onMouseDown={() => setActiveModal(!activeModal)} 
          >
          <div className={classes.header}>
            {/* <HandySvg 
              className={classes.icon}
              src='/assets/icons/lang.svg' 
              width={24}
              height={24}
              alt={'lang'}
              /> */}
            {langsData.map((item) => item.id == localeActive && item.name)}
          </div>
          <HandySvg 
              className={clsx(classes.arrow, activeModal && classes.arrow_active)}
              src='/assets/icons/arrow-right.svg' 
              width={24}
              height={16}
              alt='lang'
              />
      </button>
      <ul className={clsx(classes.items, activeModal && classes.active_body)}>
        {listLocales?.map((locale) => <li key={locale} className={clsx(
          classes.item,
          locale == localeActive && classes.active
        )} >
          <Link 
            className={classes.lang} 
            href={router.asPath} 
            locale={locale}
            onMouseDown={() => setActiveModal(false)}
            >
            {langsData.map((item) => {
              if(item.id == locale) {
                return item.name
              }
            })}
          </Link>
        </li>)}
      </ul>
    </div>
  </>
}
