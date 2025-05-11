import { HandySvg } from 'handy-svg'
import classes from './under-banner.module.scss'
import Link from 'next/link'
import clsx from 'clsx'
import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'

export const UnderBanner = () => {
    
    const { t } = useTranslation('common')

    return <div className={classes.wrapper} >
        <div className={classes.items} >
            <div className={classes.item} >
                <div className={classes.left} >
                    <div className={classes.header} >
                        <h3 className={classes.title} >
                            {t('underBanner1_title')}
                        </h3>
                    </div>
                    <p className={classes.text} >
                        {t('underBanner1_text')}
                    </p>
                </div>
                    <div className={classes.link} >
                        <HandySvg
                            className={classes.svg}
                            src={'/assets/icons/arrow-top-right.svg'}
                            width={14}
                            height={14}
                            alt={'link'}
                        />
                    </div>
                <Link className={classes.href} href={'/payment'}  />
            </div>
            <div className={classes.item} >
                <div className={clsx(classes.left, classes.left_body)} >
                    <div>
                        <p className={classes.text}>
                            {t('underBanner2_subtitle')}   
                        </p>
                        <h3 className={classes.title}>
                            {t('underBanner2_title')}
                        </h3>
                    </div>
                    <div className={classes.button} >
                        {t('chooseApartment')}
                        <HandySvg
                            className={classes.svg_2}
                            src={'/assets/icons/arrow-top-right.svg'}
                            width={12}
                            height={12}
                            alt={'link'}
                        />
                    </div>
                </div>
                <div className={classes.right} >
                    <div className={classes.bl_image}>
                        <Image
                            width={350}
                            height={250}
                            src='/assets/icons/apartments.png'
                            alt='apartments'
                        />
                    </div>
                </div>
                <Link className={classes.href} href={'/apartments/?price_min=3620'}  />
            </div>
        </div>
    </div>
}