
import { useEffect, useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import useTranslation from 'next-translate/useTranslation';
import classes from './modal-form.module.scss'
import toast from "react-hot-toast";
import { FetchStatus } from "@shared/model";
import { Modal } from "@shared/ui/Modal";
import { Input } from "@shared/ui/Input";
import { Button } from "@shared/ui/Button";
import { BarLoader } from "@shared/ui/loaders/BarLoader";
import { Alert } from "@shared/ui/Alert";
import { useApplicationStore } from "@widgets/application/model/applicationStore";
import { HandySvg } from "handy-svg";
import { validatePhoneNumber } from "@shared/lib/validatePhoneNumber";
import { TextArea } from "@shared/ui/TextArea";

interface FormData {
  name: string
  number: string
  gmail?: string | null
  comment?: string | null
}

export const ModalForm = () => {
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
  const { toggle, isOpen, close } = useApplicationStore((state) => (state))
  const { t } = useTranslation('common')

  useEffect(() => {
    if (isOpen) {
      setSubmitStatus('normal')
    }
  }, [isOpen])
  const onSubmit: SubmitHandler<FormData> = async (data) => {

    setSubmitStatus('pending')

    try {
      let text = `<b>Заявка c sabt.tj</b>\n\n`
      text += `<b>Имя:</b> ${data.name}\n`
      text += `<b>Контакт:</b> ${data?.number}\n`
      text += `<b>Почта:</b> ${data?.gmail}\n`
      text +=  data?.comment ? `<b>Комментарий:</b> ${data?.comment}\n` : ''

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
      comment: ''
    })


    setSubmitStatus('fulfilled')
  }

  return <Modal
    isOpen={isOpen}
    close={close}
    isShowCloseButton={true}
    contentClassName={classes.wrapper}
    mainClassName={classes.body}
  >
    {submitStatus == 'normal' ? <form
      className={classes.form}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className={classes.bl_title} >
        <h2 className={classes.title} >
          {t('requestCall')}
        </h2>
      </div>
      {!!errorMessage && <Alert type="danger">{errorMessage}</Alert>}
      <div className={classes.items} >
        <div className={classes.item}>
          <Input
            label={t('input_name')}
            groupProps={{ className: classes.inputGroup }}
            {...register('name', {
              required: 'Введите имя?',
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
              required: 'Введите почту или телеграм?',
            })}
            placeholder={t('gmail')}
            errorMessage={errors.gmail?.message}
          />
        </div>
        <div className={classes.item}>
          <Input
            label={t('phoneNumber')}
            groupProps={{ className: classes.inputGroup }}
            {...register('number', {
              required: 'Введите номер телефона?',
              validate: validatePhoneNumber,
              value: '+992',
            })}
            placeholder={t('phoneNumber')}
            errorMessage={errors.number?.message}
          />
        </div>
        <div className={classes.item_textArea}>
          <TextArea
            className={classes.textArea}
            label={'Комментария'}
            groupProps={{ className: classes.inputGroup }}
            {...register('comment')}
            placeholder={t('comment')}
            // errorMessage={errors.comment?.message}
          />
        </div>
      </div>
      <div className={classes.bl_buttons} >
        <Button
          type="submit"
          fullWidth
          className={classes.button_send}
          onClick={(event) => {
            event.preventDefault()
            close()
          }}
        >
          {t('cancel')}
        </Button>
        <Button
          type="submit"
          bg='secondary'
          fullWidth
          className={classes.button_send}
        >
          <span>{t('send')}</span>
        </Button>
      </div>
    </form> : <div className={classes.loading} >
      {submitStatus === 'pending' && (
        <div className={classes.loading_body} >
          <HandySvg
            src="/assets/icons/spinner.svg"
            width={60}
            height={60}
          />
          <p>
            {t('loading')}
          </p>
        </div>
      )}
      {submitStatus === 'fulfilled' && (
        <div className={classes.loading_body} >
        <HandySvg
          src="/assets/icons/success.svg"
          width={60}
          height={60}
        />
        <p> {t('success')} </p>
      </div>)}
      </div> }
  </Modal>
}
