import { IApartment } from "@widgets/apartments/model/Apartment"
import classes from './application.module.scss'
import Dropdown from "@shared/ui/Dropdown/Dropdown"
import { useEffect, useState } from "react"
import { Button } from "@shared/ui/Button"
import Image from "next/image"
import { IResidences } from "@widgets/projects/model/IProjectCard"
import { FetchStatus } from "@shared/model"
import { SubmitHandler, useForm } from "react-hook-form"
import useTranslation from "next-translate/useTranslation"
import toast from "react-hot-toast"
import { Alert } from "@shared/ui/Alert"
import { Input } from "@shared/ui/Input"
import { BarLoader } from "@shared/ui/loaders/BarLoader"
import { Status } from "../Status"
import { BanksItems } from "../BanksItems"
import clsx from "clsx"
import { validatePhoneNumber } from "@shared/lib/validatePhoneNumber"
import { useQuery } from "react-query"
import { getFetcher } from "@shared/api/fetcher/getFetcher"
import { useRouter } from "next/router"

interface FormData {
    name: string
    number: string
    gmail: string
  }
  
interface Props {
    apartment: IResidences
    close(): void
}

const banksData = [
    {
        id: 1,
        value: 'Хумо',
        img: '/assets/icons/bank_1.svg'
    },
    {
        id: 2,
        value: 'Алиф',
        img: '/assets/icons/bank_2.svg'
    },
    {
        id: 3,
        value: 'Хумо',
        img: '/assets/icons/bank_1.svg'
    },
    {
        id: 4,
        value: 'Алиф',
        img: '/assets/icons/bank_2.svg'
    },
]

interface IPayment {
    id: number 
    name: string 
}

export const Application = ({apartment, close}: Props) => {
    const [paymentOptions, setPaymOntoptions] = useState<number[]>([1])
    const [errorMessage, setErrorMessage] = useState('')
    const [submitStatus, setSubmitStatus] = useState<FetchStatus>('normal')
    const [activeBank, setActiveBank] = useState<number>(1)
    const router = useRouter() 
    const lang = router.locale 
    // const { data: banks, isLoading } = useQuery<IBank[]>(
    //     ['banks' + lang],
    //     () => getFetcher(`/bank/get`, lang ? lang : 'ru')
    // );
     
    const {
      formState: { errors },
      reset,
      register,
      handleSubmit,
      watch
    } = useForm<FormData>({
      mode: 'onChange'
    })
    useEffect(() => {
      setErrorMessage('')
    }, [watch('number'), watch('name'), watch('gmail')])
    const { t } = useTranslation('common')

    const paymentData:IPayment[] = [
        {
            id: 1,
            name: t('fullPrepayment')
        },
        {
            id: 2,
            name: t('installmentPlan')
        },
        {
            id: 3,
            name: t('mortgage')
        }
    ]
    const onSubmit: SubmitHandler<FormData> = async (data) => {

        setSubmitStatus('pending')
    
        try {
          let text = `<b>Заявка c Asian Holding</b>\n\n`
            text += `<b>Имя:</b> ${data.name}\n`
            text += `<b>Контакт:</b> ${data?.number}\n`
            text += `<b>Почта:</b> ${data?.gmail}\n\n`

            text += `Название: ${apartment.title}\n`
            text += `<b>Общая площадь:</b> ${apartment.area}\n`
            text += `<b>Жилой комплекс:</b> ${apartment.residence?.address}\n\n`

            if(paymentOptions[0] !== 1 ) {                
                paymentData.map((item) =>{
                    if(item.id == paymentOptions[0] ) {
                        if(item.id == 1) {
                            text += `<b>Оплата:</b> Полная предоплата\n`
                        }
                        if(item.id == 2) {
                            text += `<b>Оплата:</b> Рассрочка\n`
                        }
                        if(item.id == 3) {
                            text += `<b>Оплата:</b> Ипотека\n`
                        }
                    }
                })
                // {banks && banks.map((item) =>{
                //     if(item.id == activeBank ) {
                //         text += `<b>Банк:</b> ${item.name}\n`
                //     }
                // })}

            } else {
                text += `<b>Оплата:</b> Полная предоплата\n`
            }

    
        //   try {
        //     const responseTelegram = await fetch(
        //       `https://api.telegram.org/bot7002729464:AAEcwdUghO4pZB_SgcXBo3I4Px6rAghPs7o/sendMessage`,
        //       {
        //         method: 'POST',
        //         headers: {
        //           'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify({
        //           chat_id: -1002229881511,
        //           parse_mode: 'HTML',
        //           text: text,
        //         }),
        //       },
        //     )
    
        //     toast.success('Успешно отправлено!')
        //   } catch (e) {
        //     throw new Error('Произошла ошибка при отправке данных')
        //   }
        } catch (e) {
          console.error(e)
        }
    
    
        reset({
          name: '',
          number: '+992',
          gmail: '',
        })
    
    
        setSubmitStatus('fulfilled')
      }
    
    //   if(isLoading) {
    //     return <div>Loading...</div>
    //   }

    return <div className={classes.wrapper}> 
        {submitStatus !== 'fulfilled' ? <>
            <div className={classes.top} >
                <h3 className={classes.title_mobile}>
                    {t('submitApplication')}
                </h3>
            </div>
            <div className={classes.left} >
                <div className={classes.bl_img} >
                    <Image 
                        width={500}
                        height={600}
                        src={apartment.image} 
                        alt={apartment.title}
                        />
                </div>
            </div>
            <form 
                className={classes.right} 
                onSubmit={handleSubmit(onSubmit)} >
                <div className={classes.body} >
                    <h2 className={classes.title} >{t('submitApplication')}</h2>
                    <div className={classes.form} >
                        {!!errorMessage && <Alert type="danger">{errorMessage}</Alert>}
                            <div className={classes.items_inputs} >
                                <div className={classes.item_input}>
                                    <Input
                                        label={t('input_name')}
                                        groupProps={{ className: classes.inputGroup }}
                                        {...register('name', {
                                        required: 'Введите ваше имя',
                                        })}
                                        placeholder={t('questionInput1')}
                                        errorMessage={errors.name?.message}
                                    />
                                </div>
                                <div className={classes.item_input}>
                                    <Input
                                        label={t('input_surname')}
                                        groupProps={{ className: classes.inputGroup }}
                                        {...register('gmail', {
                                        required: 'Введите вашу фамилию',
                                        })}
                                        placeholder={t('questionInput3')}
                                        errorMessage={errors.gmail?.message}
                                    />
                                </div>
                                <div className={classes.item_input}>
                                    <Input
                                        label={t('phoneNumber')}
                                        groupProps={{ className: classes.inputGroup }}
                                        {...register('number', {
                                        required: 'Введите ваш номер телефона',
                                        validate: validatePhoneNumber,
                                        value: '+992',
                                        })}
                                        placeholder={t('questionInput2')}
                                        errorMessage={errors.number?.message}
                                    />
                                </div>
                            </div>
                    </div>
                    <Dropdown 
                        className={classes.dropdown}
                        label={t('fullPrepayment')}
                        items={paymentData.map(({ name, id }) => ({
                            id, label: name
                        }))}
                        state={paymentOptions}
                        setState={setPaymOntoptions}
                    />
                    {/* <div className={clsx(classes.banks, paymentOptions[0] !== 1 && classes.banks_active )}>
                        <BanksItems 
                            name='apartment' 
                            items={banks}
                            activeBank={activeBank}
                            setActiveBank={setActiveBank}
                            />
                    </div> */}
                    <div className={classes.info} >
                        <h4 className={classes.info_title} >{apartment.title}</h4>
                        <ul className={classes.items}>
                            <li className={classes.item}>
                                <p className={classes.span_1} >
                                    {t('totalArea')}
                                </p>
                                <p className={classes.span_2} >
                                    {apartment.area}
                                </p>
                            </li>
                            <li className={classes.item}>
                                <p className={classes.span_1} >
                                    {t('price')}
                                </p>
                                <p className={classes.span_2} >
                                    {apartment.price}
                                </p>
                            </li>
                            <li className={classes.item}>
                                <p className={classes.span_1} >
                                    {t('residentialComplex')}
                                </p>
                                <p className={classes.span_2} >
                                    {apartment.floor}
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className={classes.buttons} >
                        <Button 
                            className={classes.button} 
                            bg='secondary' 
                            buttonSize='medium' 
                            fullWidth
                            type='reset'
                            onClick={() => close()}
                            >
                            {t('cancel')}
                        </Button>
                        <Button
                            type="submit"
                            fullWidth
                            buttonSize='medium'
                            className={classes.button_send}
                            onClick={(event) => {
                                if (submitStatus === 'pending') {
                                event.preventDefault()
                                }
                            }}
                            >
                            {submitStatus === 'pending' && (
                                <BarLoader
                                color="#fff"
                                width={20}
                                height={20}
                                size={3}
                                />
                            )}
                            {submitStatus !== 'pending' && <span>{t('send')}</span>}
                            </Button>
                    </div>
                </div>
            </form>
        </> : <Status />}
    </div>
}