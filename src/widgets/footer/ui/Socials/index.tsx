import Link from 'next/link'
import classes from './socials.module.scss'
import { socialsData } from '@shared/const/socials'
import { HandySvg } from 'handy-svg'

export const Socials = () => {

    return <div className={classes.socials}>
        <ul className={classes.items} >
            {socialsData.map((item, index) =>
            <li className={classes.item} key={index}>
                <Link className={classes.link} href={item.link} target='_blank' >
                    <HandySvg 
                        src={item.image}
                        width={24}
                        height={24}
                        alt={item.name}
                    />
                    {/* {item.name} */}
                </Link>
            </li>
            )}
        </ul>
    </div>
}