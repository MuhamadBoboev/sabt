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
    <div>
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
                  width={100}
                  height={50}
                  priority
                />
              </Link>
              <div >
                <Navigation />
              </div>
            </div>
            <Contacts />
          </div>
        </Wrapper>
      </div>
      <div className={classes.overlay}>
      </div>
      <Navigation />
    </div>
  )
}

export { HeaderMain }
