import { Section } from "@shared/ui/Section"
import { SearchMain } from "../SearchMain"
import classes from './search-bar.module.scss'
import { useSearchStore } from "@widgets/searchBar/model/searchStore"
import { Modal } from "@shared/ui/Modal"
import { HandySvg } from "handy-svg"
import { useWindowSize } from "@uidotdev/usehooks";
import { IProjectCard } from "@widgets/projects/model/IProjectCard"
import { IStatus } from "@widgets/searchBar/model/searchBar"
import useTranslation from "next-translate/useTranslation"

interface Props {
    residences?: IProjectCard[] | null
    status?: IStatus[]
}

export const SearchBar = ({residences, status}: Props) => {
    const { t } = useTranslation('common')
    const { isOpen, toggle } = useSearchStore(({ isOpen, toggle }) => ({
        isOpen,
        toggle,
      }))
      const size = useWindowSize();
      return <Section
        className={classes.section} 
        name={t('chooseApartments')}
        buttonMore={
            <button 
                className={classes.button}
                onClick={() => toggle()}>
                <HandySvg 
                    src='/assets/icons/filter.svg' 
                    width={20}
                    height={20}
                    alt='filter'
                    />
            </button>}
        >
        {size.width != null && size.width > 768 && <SearchMain residences={residences} status={status} />}
        <Modal
            isOpen={isOpen}
            close={toggle}
            isShowCloseButton={true}
        >
            <SearchMain residences={residences} status={status} />
        </Modal>
    </Section>
}