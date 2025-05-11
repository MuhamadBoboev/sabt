
import { useEffect, useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import useTranslation from 'next-translate/useTranslation';
import classes from './apartment-form.module.scss'
import toast from "react-hot-toast";
import { FetchStatus } from "@shared/model";
import { Input } from "@shared/ui/Input";
import { Button } from "@shared/ui/Button";
import { BarLoader } from "@shared/ui/loaders/BarLoader";
import { Alert } from "@shared/ui/Alert";

interface FormData {
  name: string
  number: string
  gmail: string
}

export const ApartmentForm = () => {
  const [errorMessage, setErrorMessage] = useState('')
  const [submitStatus, setSubmitStatus] = useState<FetchStatus>('normal')
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

  const onSubmit: SubmitHandler<FormData> = async (data) => {

    setSubmitStatus('pending')

    try {
      let text = `<b>Заявка c Asian Holding</b>\n\n`
      text += `<b>Имя:</b> ${data.name}\n`
      text += `<b>Контакт:</b> ${data?.number}\n`
      text += `<b>Почта:</b> ${data?.gmail}\n`

      // try {
      //   const responseTelegram = await fetch(
      //     `https://api.telegram.org/bot7002729464:AAEcwdUghO4pZB_SgcXBo3I4Px6rAghPs7o/sendMessage`,
      //     {
      //       method: 'POST',
      //       headers: {
      //         'Content-Type': 'application/json',
      //       },
      //       body: JSON.stringify({
      //         chat_id: -1002229881511,
      //         parse_mode: 'HTML',
      //         text: text,
      //       }),
      //     },
      //   )

      //   toast.success('Успешно отправлено!')
      // } catch (e) {
      //   throw new Error('Произошла ошибка при отправке данных')
      // }
    } catch (e) {
      console.error(e)
    }


    reset({
      name: '',
      number: '',
      gmail: '',
    })


    setSubmitStatus('fulfilled')
  }

  return <form
      className={classes.form}
      onSubmit={handleSubmit(onSubmit)}
    >
      {!!errorMessage && <Alert type="danger">{errorMessage}</Alert>}
      <div className={classes.items} >
        <div className={classes.item}>
          <Input
            label={t('input_name')}
            groupProps={{ className: classes.inputGroup }}
            {...register('name', {
              required: 'What is your name?',
            })}
            placeholder={t('input_name')}
            errorMessage={errors.name?.message}
          />
        </div>
        <div className={classes.item}>
          <Input
            label={t('input_surname')}
            groupProps={{ className: classes.inputGroup }}
            {...register('gmail', {
              required: 'Exaple@gmail.com?',
            })}
            placeholder={t('input_surname')}
            errorMessage={errors.gmail?.message}
          />
        </div>
        <div className={classes.item}>
          <Input
            label={t('phoneNumber')}
            groupProps={{ className: classes.inputGroup }}
            {...register('number', {
              required: 'Phone number?',
            })}
            placeholder={t('phoneNumber')}
            errorMessage={errors.number?.message}
          />
        </div>
      </div>
      <div className={classes.bl_buttons} >
        <Button
          type="submit"
          fullWidth
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
    </form>
}
