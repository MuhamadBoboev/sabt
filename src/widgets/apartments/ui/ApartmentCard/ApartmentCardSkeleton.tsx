import Skeleton from 'react-loading-skeleton';
import classes from './apartment-card.module.scss';
import 'react-loading-skeleton/dist/skeleton.css';


export const ApartmentCardSkeleton = () => {
    return <div className={classes.card}>
    <div className={classes.top} style={{
        padding: '20px'
    }} >
        <Skeleton className={classes.img_skeleton} />
    </div>
    <div className={classes.content} >
        <div className={classes.body} >
            <div className={classes.title}>
                <Skeleton width={'70%'} className={classes.skeleton_item}/>
            </div>
            <ul className={classes.items}>
                <li className={classes.item}>
                        <Skeleton className={classes.skeleton_item} width={'100px'} />
                        <Skeleton className={classes.skeleton_item} width={'30px'} />
                </li>
                <li className={classes.item}>
                        <Skeleton className={classes.skeleton_item} width={'40px'} />
                        <Skeleton className={classes.skeleton_item} width={'40px'} />
                </li>
                <li className={classes.item}>
                        <Skeleton className={classes.skeleton_item} width={'90px'} />
                        <Skeleton className={classes.skeleton_item} width={'40px'} />
                </li>
            </ul>
            <Skeleton className={classes.skeleton_button} width={'100%'} />
        </div>
    </div>
</div>
}