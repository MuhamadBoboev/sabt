import { Footer } from "@widgets/footer"
import { Header } from "@widgets/header"
import { ReactNode } from "react"
import classes from './layout.module.scss'

interface Props {
  children: ReactNode
}

export const AppLayout = ({children}: Props) => {

  return (
    <div className={classes.container}>
       {/* <div className={classes.overlay}>
        <div className={classes.body}>
          <h1 className={classes.title}>
            К новому году
          </h1>
          <p className={classes.subtitle}>Сайт откроется в 2025</p>
        </div>
      </div> */}
      <Header />
      <main className={classes.app}>
        {children}
      </main>
      <Footer />
  </div>
  )
}
