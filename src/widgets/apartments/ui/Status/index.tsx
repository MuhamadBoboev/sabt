import classes from './status.module.scss'
import { Button } from "@shared/ui/Button"
import Link from "next/link"
import { HandySvg } from "handy-svg"

export const Status = () => {

    return <div className={classes.wrapper}> 
        <div className={classes.status}>
            <div className={classes.status_body}>
                <div className={classes.bl_status_img} >
                    <HandySvg 
                        className={classes.status_img}
                        src="/assets/icons/fulfilled.svg"
                        width={172}
                        height={172}
                        alt={'fulfilled'}
                    />
                </div>
                <h2 className={classes.status_title} >
                    Ваша заявка успешно принята
                </h2>
                <p className={classes.status_text} >
                    В ближайшее время с вам свяжеться наш сотрудник
                </p>
                <div className={classes.status_bl_button} >
                    <Button className={classes.button} component={Link} href="/" >
                        На главную
                    </Button>
                </div>
            </div>
        </div>
    </div>
}