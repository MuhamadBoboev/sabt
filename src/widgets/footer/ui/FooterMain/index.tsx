import { Wrapper } from '@shared/ui/Wrapper'
import classes from './footer-main.module.scss'
import { FooterTop } from '../FooterTop'
import { FooterContent } from '../FooterContent'
import { Socials } from '../Socials'
import Link from 'next/link'

export const FooterMain = () => {
    return <div className={classes.wrapper}>
        <Wrapper>
            <div className={classes.footer} >
                {/* <FooterTop/> */}
                <FooterContent />
                <Socials />
                <div className={classes.bl_text} >
                    <p className={classes.text} >
                        © 2025 «Сабт.тч»
                    </p>
                    <div className={classes.developer} >
                        Product by&nbsp;
                        <Link 
                            className={classes.link} 
                            href={'https://webrand.tj/'}
                            target='_blank'
                            >
                            We
                            <span>Brand</span>
                        </Link>
                    </div>
                </div>
            </div>
        </Wrapper>
    </div>
}
