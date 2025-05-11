import clsx from 'clsx'
import classes from './date.module.scss'
import { HandySvg } from 'handy-svg'

interface Props {
  date: string 
  className?: string 
}

export const FormatDate = ({ date, className }: Props) => {

  if (!date) {
    return null
  }

  const formatDate = new Date(date);

  if (isNaN(formatDate.getTime())) {
    return date;
  }

  const formatter = new Intl.DateTimeFormat('ru-RU', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  });

  const formattedDate = formatter.format(formatDate);

  return (
    <div className={clsx(classes.body, className)}>
      <HandySvg 
        src='/assets/icons/time.svg' 
        width={24}
        height={24}
        alt={'asd'}
      />
      <p className={classes.date}>
        {formattedDate}
      </p>
    </div>
  );
}
