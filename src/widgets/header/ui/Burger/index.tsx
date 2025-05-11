import classes from './burger.module.scss'
import clsx from 'clsx'
import { usePathname } from 'next/navigation'
import { useMenuStore } from '@widgets/header/model/menuStore'

function Burger() {
  const pathname = usePathname()
  const { isOpen, toggle } = useMenuStore(({ isOpen, toggle }) => ({
    isOpen,
    toggle,
  }))

  return (
    <button
      className={clsx(
        classes.burger,
        pathname === '/' && classes.mainPage,
        isOpen && classes.open,
      )}
      aria-label={isOpen ? 'Close' : 'Open'}
      onClick={toggle}
    >
      <span />
    </button>
  )
}

export { Burger }
