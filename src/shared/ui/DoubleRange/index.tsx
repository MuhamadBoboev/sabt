import { ChangeEvent } from 'react';
import classes from './double-range.module.scss'
import RangeSlider from '../RangeSlider';
import useTranslation from 'next-translate/useTranslation';

interface Props {
    lowerValue: number;
    upperValue: number;
    setLowerValue: (value: number) => void;
    setUpperValue: (value: number) => void;
}

export const DoubleRange = ({lowerValue,
    upperValue,
    setLowerValue,
    setUpperValue,
  }: Props) => {
    const handleLowerChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = Math.min(Number(event.target.value), upperValue - 5);
        setLowerValue(value);
      };
    
      const handleUpperChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = Math.max(Number(event.target.value), lowerValue + 5);
        setUpperValue(value);
      };
  
    const { t } = useTranslation('common')
    return (
        <div className={classes.wrapper} >
            <div className={classes.items}>
                <div className={classes.item} >
                    <p className={classes.text} >
                        {t('price-from')}&nbsp;
                    </p>
                    <div className={classes.value}>
                        <input type='number' value={lowerValue} onChange={(e) => setLowerValue(e.target.valueAsNumber)} />
                    </div>
                </div>
                <div className={classes.item} >
                    <p className={classes.text} >
                        {t('to')}&nbsp;
                    </p>
                    <div className={classes.value}>
                        <input type='number' value={upperValue} onChange={(e) => setUpperValue(e.target.valueAsNumber)} />
                    </div>
                    <p className={classes.text} >
                        {t('somoni')}
                    </p>
                </div>
            </div>
            <div className={classes.body}>
                <RangeSlider
                    lowerValue={lowerValue}
                    upperValue={upperValue}
                    setLowerValue={setLowerValue}
                    setUpperValue={setUpperValue}
                />
                {/* <div className={classes.rangeSlider}>
                    <input
                    type="range"
                    min="0"
                    max="500000"
                    value={lowerValue}
                    onChange={handleLowerChange}
                    className={classes.lower}
                    />
                    <input
                    type="range"
                    min="0"
                    max="500000"
                    value={upperValue}
                    onChange={handleUpperChange}
                    className={classes.upper}
                    />
                </div> */}
            </div>
        </div>
    );
}