import { Section } from "@shared/ui/Section"
import { SearchMain } from "../SearchMain"
import classes from './search-bar-main.module.scss'
import { useSearchStore } from "@widgets/searchBar/model/searchStore"
import { Modal } from "@shared/ui/Modal"
import { HandySvg } from "handy-svg"
import { useWindowSize } from "@uidotdev/usehooks";
import { IStatus } from "@widgets/searchBar/model/searchBar"
import { IProjectCard } from "@widgets/projects/model/IProjectCard"
import useTranslation from "next-translate/useTranslation"

interface Props {
    status?: IStatus[] 
    residences?: IProjectCard[]
}
export const SearchBarMain = ({status, residences}: Props) => {
    const { t } = useTranslation('common')
    const { isOpen, toggle } = useSearchStore(({ isOpen, toggle }) => ({
        isOpen,
        toggle,
      }))
      const size = useWindowSize();
      return <div className={classes.section} >
        <div className={classes.header} >
            <h1 className={classes.title} >
            {t('choose')}&nbsp;<span>{t('apartment')}</span>
            </h1>
            <button 
                className={classes.button}
                onClick={() => toggle()}>
                <HandySvg 
                    src='/assets/icons/filter.svg' 
                    width={20}
                    height={20}
                    alt='filter'
                    />
            </button>
        </div>
        {size.width != null && size.width > 768 && <SearchMain status={status} residences={residences} />}
        <Modal
            isOpen={isOpen}
            close={toggle}
            isShowCloseButton={true}
        >
            <SearchMain status={status} residences={residences} />
        </Modal>
    </div>
}