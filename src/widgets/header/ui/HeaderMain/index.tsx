'use client'
import Link from 'next/link'
import Image from 'next/image'
import { Wrapper } from '@shared/ui/Wrapper'
import { Contacts } from '@widgets/header/ui/Contacts'
import { Navigation } from '@widgets/header/ui/Navigation'
import classes from './headerMain.module.scss'
import useTranslation from 'next-translate/useTranslation'

function HeaderMain() {

  const { t } = useTranslation('common')
  return (
    <div className={classes.mainPage}>
      <Wrapper className={classes.wrapper}>
        <div className={classes.block}>
          <div className={classes.header_left} >
            <Link href={"/"}
              className={classes.logo}
            >
              <Image
                src={`/assets/icons/logo.svg`}
                alt="webrand"
                width={200}
                height={42}
                priority
              />
            </Link>
            <Navigation />
          </div>
          <Contacts />
        </div>
      </Wrapper>
    </div>
  )
}

export { HeaderMain }
