
import classes from './application.module.scss'
import useTranslation from 'next-translate/useTranslation';
import { Wrapper } from '@shared/ui/Wrapper';
import { Form } from '../Form';

export const Application = () => {
  const { t } = useTranslation('common')
  

  return <div className={classes.wrapper}>
      <Wrapper >
        <div className={classes.application}>
          <div className={classes.left} >
            <h3 className={classes.title}>
              {t('requestCall')}
            </h3>
          </div>
          <div className={classes.right} >
            <Form />
          </div>
        </div>
      </Wrapper>
    </div>
}
