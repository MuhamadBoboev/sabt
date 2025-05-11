import React, { ChangeEvent } from 'react';
import classes from './range-slider.module.scss';

interface Props {
  lowerValue: number;
  upperValue: number;
  setLowerValue: (value: number) => void;
  setUpperValue: (value: number) => void;
}

const RangeSlider = ({ lowerValue, upperValue, setLowerValue, setUpperValue }: Props) => {
  const handleLowerChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Number(event.target.value), upperValue - 5);
    setLowerValue(value);
  };

  const handleUpperChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(Number(event.target.value), lowerValue + 5);
    setUpperValue(value);
  };

  return (
    <div className={classes.rangeSlider}>
      <input
        type="range"
        min="0"
        max="500000"
        value={lowerValue}
        onChange={handleLowerChange}
        className={classes.thumb}
        style={{ zIndex: lowerValue > upperValue - 1000 ? 5 : 3 }} // Перекрытие
      />
      <input
        type="range"
        min="0"
        max="500000"
        value={upperValue}
        onChange={handleUpperChange}
        className={classes.thumb}
        style={{ zIndex: upperValue < lowerValue + 1000 ? 5 : 3 }} // Перекрытие
      />
      <div className={classes.track}></div>
      <div className={classes.range} style={{ left: `${(lowerValue / 500000) * 100}%`, right: `${100 - (upperValue / 500000) * 100}%` }}></div>
    </div>
  );
};

export default RangeSlider;
