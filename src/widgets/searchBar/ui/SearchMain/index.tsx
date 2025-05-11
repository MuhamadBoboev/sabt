import classes from './search-main.module.scss'
import Dropdown from '@shared/ui/Dropdown/Dropdown'
import { useEffect, useState } from 'react'
import { DoubleRange } from '@shared/ui/DoubleRange'
import { Button } from '@shared/ui/Button'
import { RadioItems } from '@shared/ui/RadioItems'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { useSearchStore } from '@widgets/searchBar/model/searchStore'
import { IProjectCard } from '@widgets/projects/model/IProjectCard'
import { IStatus } from '@widgets/searchBar/model/searchBar'
import useTranslation from 'next-translate/useTranslation'
// const complexData = [
//     {
//         id: 1,
//         name: 'asd'
//     },
//     {
//         id: 2,
//         name: 'asd'
//     },
//     {
//         id: 3,
//         name: 'asd'
//     }
// ]
const apartmentData = [
    {
        id: 1,
        value: '1room'
    },
    {
        id: 2,
        value: '2room'
    },
    {
        id: 3,
        value: '3room'
    },
    {
        id: 4,
        value: '4room'
    },
]

interface Props {
    residences?: IProjectCard[] | null
    status?: IStatus[] | null
}

export const SearchMain = ({residences, status}: Props) => {
    const searchParams = useSearchParams();
    const [activeRoom, setActiveRoom] = useState<number>(1)
    const [activeComplext, setActiveComplext] = useState<number[]>([0])
    const [activeStatus, setActiveStatus] = useState<number[]>([0])
    const [lowerValue, setLowerValue] = useState(0);
    const [upperValue, setUpperValue] = useState(356000);
    const { t } = useTranslation('common')
    const { close } = useSearchStore(({ close }) => ({
        close,
      }))
    
    const getQuery = (url = '') => {
        let query: string[] = []
        if(activeRoom.toString()) {
            query.push(`room_count=${activeRoom}`)
        }

        if(activeComplext.toString() && activeComplext[0] !== 0) {
            activeComplext.forEach((item) => {
                query.push(`residence_id=${item}`)
            })
        }
        if(lowerValue !== undefined && lowerValue !== null) {
            query.push(`price_min=${lowerValue}`)
        }
        if(upperValue !== undefined && lowerValue !== null) {
            query.push(`price_max=${upperValue}`)
        }
        if(activeStatus.toString() && activeStatus[0] !== 0) {
            activeStatus.forEach((item) => {
                query.push(`status=${item}`)
            })
        }
        return `apartments/${url}?${query.join('&')}`
    }


    useEffect(() => {
        const complex = searchParams.getAll('residence_id')
        if(complex?.length !== 0) {
            setActiveComplext(complex.map(Number))
        } else {
            setActiveComplext([])
        }

        const status = searchParams.getAll('status')
        if(status?.length !== 0) {
            setActiveStatus(status.map(Number))
        } else {
            setActiveStatus([])
        }
        setActiveRoom(searchParams.get("room_count") ? Number(searchParams.get("room_count")) : 1)
        setLowerValue(searchParams.get("price_min") ? Number(searchParams.get("price_min")) : 0)
        setUpperValue(searchParams.get("price_max") ? Number(searchParams.get("price_max")) : 356000)
    }, [searchParams])

    if(!residences) {
        return null
    }

    return  <div className={classes.body} >
    <h3 className={classes.title} >
        {t('filter')}
    </h3>
    <div className={classes.radio} >
        <RadioItems 
            name='apartment' 
            items={apartmentData}
            activeRoom={activeRoom}
            setActiveRoom={setActiveRoom}
            />
    </div>
    <div className={classes.item_dropdown_1} > 
        <Dropdown
            className={classes.dropdown}
            label={t('all-complexes')}
            items={[{id: 0, label: t('not-select')},...residences?.map((item) => ({
                id: item.id, label: item.title
            }))]}
            state={activeComplext}
            setState={setActiveComplext}
        />
    </div>
    <div className={classes.range} >
        <DoubleRange
            lowerValue={lowerValue}
            setLowerValue={setLowerValue}
            upperValue={upperValue}
            setUpperValue={setUpperValue}
        />
    </div>
    <div className={classes.item_dropdown_2} > 
        {status && <Dropdown
            className={classes.dropdown}
            label={t('status')}
            items={[{id: 0, label: t('not-select')} , ...status?.map((item) => ({
                id: item.id, label: item.title
            }))]}
            state={activeStatus}
            setState={setActiveStatus}
        />}
    </div>
    <div className={classes.bl_button} >
        <Button
            buttonSize='large'
            component={Link}
            href={getQuery()}
            onClick={() => close()}
            className={classes.button}
            >
            {t('view')}
        </Button>
    </div>
    </div>
}