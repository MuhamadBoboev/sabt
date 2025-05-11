import { Wrapper } from '@shared/ui/Wrapper'
import classes from './footer-main.module.scss'
import { FooterTop } from '../FooterTop'
import { FooterContent } from '../FooterContent'
import { Socials } from '../Socials'

export const FooterMain = () => {
    return <div className={classes.wrapper}>
        <Wrapper>
            <div className={classes.footer} >
                {/* <FooterTop/> */}
                <FooterContent />
                <Socials />
                <div className={classes.bl_text} >
                    <p className={classes.text} >
                        © 2025 «ВиБренд»
                    </p>
                </div>
            </div>
        </Wrapper>
    </div>
}
