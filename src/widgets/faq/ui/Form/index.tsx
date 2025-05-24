import { useEffect, useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import useTranslation from 'next-translate/useTranslation';
import classes from './form.module.scss'
import toast from "react-hot-toast";
import { FetchStatus } from "@shared/model";
import { Input } from "@shared/ui/Input";
import { Button } from "@shared/ui/Button";
import { BarLoader } from "@shared/ui/loaders/BarLoader";
import { Alert } from "@shared/ui/Alert";
import { validatePhoneNumber } from "@shared/lib/validatePhoneNumber";
import { TextArea } from "@shared/ui/TextArea";
import { SectionTitle } from "@shared/ui";

interface FormData {
  name: string
  number: string
  gmail: string
  question: string
}

export const Form = () => {
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
  }, [watch('number'), watch('name'), watch('gmail'), watch('question')])
  const { t } = useTranslation('common')

  const onSubmit: SubmitHandler<FormData> = async (data) => {

    setSubmitStatus('pending')

    try {
      let text = `<b>Вопрос c sabt.tj</b>\n\n`
      text += `<b>Имя:</b> ${data.name}\n`
      text += `<b>Контакт:</b> ${data?.number}\n`
      text += `<b>Почта:</b> ${data?.gmail}\n`
      text += `<b>Вопрос:</b> ${data?.question}\n`

      try {
        const responseTelegram = await fetch(
          `https://api.telegram.org/bot7393488523:AAEOT0g2Vou4NnHxgD51NdrDi3B3gO8a63Y/sendMessage`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              chat_id: -1002691959947,
              parse_mode: 'HTML',
              text: text,
            }),
          },
        )

        toast.success('Успешно отправлено!')
      } catch (e) {
        throw new Error('Произошла ошибка при отправке данных')
      }
    } catch (e) {
      console.error(e)
    }

    reset({
      name: '',
      number: '+992',
      gmail: '',
      question: ''
    })

    setSubmitStatus('fulfilled')
  }

  return (
    <form className={classes.form} onSubmit={handleSubmit(onSubmit)} id="form" >
      <h2 className={classes.title}>Задать вопрос</h2>
      {!!errorMessage && <Alert type="danger">{errorMessage}</Alert>}
      <div className={classes.items}>
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
            label={t('Почта или телеграм')}
            groupProps={{ className: classes.inputGroup }}
            {...register('gmail', {
              required: 'Почта или телеграм?',
            })}
            placeholder={t('Почта или телеграм')}
            errorMessage={errors.gmail?.message}
          />
        </div>
        <div className={classes.item}>
          <Input
            label={t('phoneNumber')}
            groupProps={{ className: classes.inputGroup }}
            {...register('number', {
              required: 'Phone number?',
              validate: validatePhoneNumber,
              value: '+992',
            })}
            placeholder={t('phoneNumber')}
            errorMessage={errors.number?.message}
          />
        </div>
        <div className={classes.item}>
          {/* <label className={classes.label}>Позиция</label> */}
          <TextArea
            className={classes.textArea}
            label={'Вопрос'}
            groupProps={{ className: classes.inputGroup }}
            {...register('question')}
            placeholder={t('question')}
            errorMessage={errors.question?.message}
          />
          {errors.question && <p className={classes.error}>{errors.question.message}</p>}
        </div>
      </div>
      {/* <div className={classes.bl_buttons}> */}
        <Button
          type="submit"
          fullWidth
          // buttonSize="large"
          className={classes.button_send}
          onClick={(event) => {
            if (submitStatus === 'pending') {
              event.preventDefault()
            }
          }}
        >
          {submitStatus === 'pending' && (
            <BarLoader color="#fff" width={20} height={20} size={3} />
          )}
          {submitStatus !== 'pending' && <span>{t('send')}</span>}
        </Button>
      {/* </div> */}
    </form>
  )
}
