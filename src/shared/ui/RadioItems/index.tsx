import clsx from 'clsx';
import classes from './radio-items.module.scss'
import useTranslation from 'next-translate/useTranslation';
interface Props {
    name: string
    items: IItem[] 
    activeRoom: number;
    setActiveRoom: (value: number) => void;
}

interface IItem {
    id: number 
    value: string 
}

export const RadioItems = ({name, items, activeRoom, setActiveRoom}:Props) => {
    const { t } = useTranslation('common')
    return <div className={classes.items}>
        {items.map((item, index) => 
            <div 
                className={clsx(classes.item_input, activeRoom == item.id && classes.active)} 
                key={item.id}
                onClick={() => setActiveRoom(item.id)}
                >
                <input className={classes.input} type="radio" id={`${name}-${index}`} name={name} value={item.id} />
                <label className={classes.label} htmlFor={`${name}-${index}`}>{t(item.value)}</label>
        </div>
    )}
</div>
}