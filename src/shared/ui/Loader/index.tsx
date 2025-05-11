import { BarLoader } from '../loaders/BarLoader'
import classes from './loader.module.scss'
import Image from 'next/image'

function Loader() {
  return (
    <div className={classes.loader}>
      <div className={classes.main}>
        <Image
          className={classes.logo}
          src="/assets/icons/logo.svg"
          alt="WeBrand"
          width={220}
          height={72}
        />
        <BarLoader
          color="#59479E"
          size={5}
          width={30}
          height={30}
        />
      </div>

    </div>
  )
}

export { Loader }