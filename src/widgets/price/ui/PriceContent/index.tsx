import classes from './about-content.module.scss'
import { Wrapper } from '@shared/ui/Wrapper'
import { Button } from '@shared/ui/Button'
import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'
import { SectionTitle } from '@shared/ui'
import { useApplicationStore } from '@widgets/application/model/applicationStore'
import { WhySection } from '@widgets/sabt/ui/Why'
import Image from 'next/image'

export const PriceContent = () => {
    const { t } = useTranslation()
    const { toggle } = useApplicationStore(state => (state))
    return (
        <Wrapper className={classes.wrapper}>
            <section className={classes.pricingSection}>
                <SectionTitle title='Цены и тарифы' />
                <ul className={classes.items}>
                    <li className={classes.item}>
                        <div className={classes.item_body}>
                            <h2 className={classes.item_title}>
                                <span className={classes.title_text}>Lite </span>
                                <span className={classes.subtitle_text}>Минимальный</span>
                            </h2>
                            <p className={classes.item_description}>
                                Мы предлагаем прозрачные условия — вы платите только за результат. Подходит для салонов красоты, барбершопов, клиник, репетиторов и любых специалистов.
                            </p>

                            <ul className={classes.pricingList}>
                                <li>
                                    <div className={classes.success}>
                                        <Image 
                                            src='/assets/icons/success.png' 
                                            alt='success'
                                            width={24}
                                            height={24}
                                            />
                                        <h3>1 месяц бесплатно</h3>
                                    </div>
                                    <p>Тестируйте все функции Sabt в течение месяца — абсолютно бесплатно.</p>
                                </li>
                                <li>
                                    <div className={classes.success}>
                                        <Image 
                                            src='/assets/icons/success.png' 
                                            alt='success'
                                            width={24}
                                            height={24}
                                            />
                                        <h3>Без абонентской платы</h3>
                                    </div>
                                    <p>Никаких ежемесячных обязательств — оплачиваете только за записи.</p>
                                </li>
                                <li>
                                    <div className={classes.success}>
                                        <Image 
                                            src='/assets/icons/success.png' 
                                            alt='success'
                                            width={24}
                                            height={24}
                                            />
                                        <h3>1 сомони за запись</h3>
                                    </div>
                                    <p>Фиксированная и понятная цена — 1 сомони за каждую успешную запись.</p>
                                </li>
                            </ul>                      
                            <Button 
                                variant="contained" 
                                bg='secondary' 
                                fullWidth
                                onClick={() => toggle()}
                                >
                                    Попробовать бесплатно
                            </Button>
                            </div>
                    </li>
                </ul>
                <WhySection />
                {/* <div className={classes.benefits}>
                    <h4>Преимущества Sabt:</h4>
                    <ul>
                        <li>Работает в браузере — ничего не нужно скачивать</li>
                        <li>Простое управление расписанием</li>
                        <li>Запись через Instagram и Telegram</li>
                        <li>Отчётность и аналитика</li>
                    </ul>
                </div> */}
            </section>
        </Wrapper>
    )
}
