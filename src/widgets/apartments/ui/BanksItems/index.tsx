import clsx from 'clsx';
import classes from './banks-items.module.scss'
import Image from 'next/image';
interface Props {
    name: string
    activeBank: number;
    setActiveBank: (value: number) => void;
}

interface IItem {
    id: number 
    value: string
    img: string  
}

export const BanksItems = ({name, activeBank, setActiveBank}:Props) => {

    // if(!items) {
    //     return null
    // }
    return <div className={classes.items}>
        {/* {items.map((item, index) => 
            <div 
                className={clsx(classes.item_input, activeBank == item.id && classes.active)} 
                key={item.id}
                onClick={() => setActiveBank(item.id)}
                >
                <input className={classes.input} type="radio" id={`${name}-${index}`} name={name} value={item.id} />
                <label className={classes.label} htmlFor={`${name}-${index}`}>
                    <Image src={item.img} 
                        width={24}
                        height={24}
                        alt={item.name}
                    />
                    {item.name}</label>
        </div>
    )} */}
</div>
}