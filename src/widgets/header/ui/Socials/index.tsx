import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Svg } from '@shared/ui/Svg/Svg'
import { ISocial } from '@shared/model/ISocial'
import classes from './socials.module.scss'

interface Props {
  list: ISocial[]
}

function Socials({ list }: Props) {
  const pathname = usePathname()

  return (
    <ul className={clsx(classes.list, pathname === '/' && classes.mainPage)}>
      {list.map(({ name, link, icon, selfPage }) => (
        <li
          key={name}
          className={classes.item}
        >
          <Link
            href={link}
            target={selfPage ? '_self' : '_blank'}
            className={classes.link}
            aria-label={name}
          >
            <Svg
              className={classes.icon}
              src={icon}
              width={32}
              height={32}
            />
          </Link>
        </li>
      ))}
    </ul>
  )
}

export { Socials }
