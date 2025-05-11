import classes from './apartments-items.module.scss'
import { ApartmentCard } from '../ApartmentCard'
import { IResidences } from '@widgets/projects/model/IProjectCard'
import { ApartmentCardSkeleton } from '../ApartmentCard/ApartmentCardSkeleton'
interface Props {
    apartments?: IResidences[] | null
    isFetching: boolean
}
export const ApartmentsItems = ({apartments, isFetching}: Props) => {
    console.log(apartments)
    
    if(isFetching) {
    return <div className={classes.wrapper} >
        <div className={classes.items} >
                {new Array(8).fill(0).map((_, index) => <ApartmentCardSkeleton key={index} />)}
            </div>
        </div>
    }
    return <div className={classes.wrapper} >
        <div className={classes.items} >
            {apartments ? apartments.map((item) => 
                <ApartmentCard key={item.id} apartment={item} />
            ) : <p>Квартир нет</p>}
        </div>
    </div>
}