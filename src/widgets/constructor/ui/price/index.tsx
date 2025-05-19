'use client'

import { useForm } from 'react-hook-form'
import { useState, useEffect } from 'react'
import classes from './price.module.scss'
import toast from 'react-hot-toast'
import { BarLoader } from '@shared/ui/loaders/BarLoader'
import { Input } from '@shared/ui/Input'
import { Button } from '@shared/ui/Button'
import { AnimatedPrice } from '@shared/ui'
import { Modal } from '@shared/ui/Modal'
import Dropdown from '@shared/ui/Dropdown/Dropdown'
import { IDropdownItem } from '@shared/ui/Dropdown/model/IDropdown'

type FormData = {
  name: string
  number: string
  gmail: string
}

export const Price = () => {
  const { register, handleSubmit, reset, formState: { isSubmitting } } = useForm<FormData>()
  const [selectedOptions, setSelectedOptions] = useState<Record<string, number>>({})
  const [paymentOptions, setPaymentOptions] = useState<number[]>([])
  const [total, setTotal] = useState(0)
  const [avitve, setActive] = useState(false)
  const [selectedSiteType, setSelectedSiteType] = useState<string>('Landing Page')
  const [designOptions, setDesignOptions] = useState<number[]>([])
  const [functionalityOptions, setFunctionalityOptions] = useState<number[]>([])
  const [adminOptions, setAdminOptions] = useState<number[]>([])
  const [supportOptions, setSupportOptions] = useState<number[]>([])
  const [marketingOptions, setMarketingOptions] = useState<number[]>([])

  const formatLabel = (label: string, price: number) => `${label} — ${price.toLocaleString()} сомони`

  const paymentData: IDropdownItem[] = [
    { id: 1, label: formatLabel('Лендинг', 1499), value: 'Landing Page', price: 1499 }, // Цена на лендинг по сниженной
    { id: 2, label: formatLabel('Корпоративный сайт', 3499), value: 'Корпоративный сайт', price: 3499 },
    { id: 3, label: formatLabel('Интернет-магазин', 6499), value: 'Интернет-магазин', price: 6499 },
    { id: 4, label: formatLabel('Сайт-каталог', 2999), value: 'Сайт-каталог', price: 2999 },
    { id: 5, label: formatLabel('Многостраничный сайт', 4499), value: 'Многостраничный сайт', price: 4499 },
    { id: 6, label: formatLabel('Сайт-визитка', 999), value: 'Сайт-визитка', price: 999 },
  ]
  
  const designData: Record<string, IDropdownItem[]> = {
    'Landing Page': [
      { id: 1, label: formatLabel('Уникальный дизайн', 999), value: 'Уникальный дизайн', price: 999 },
      { id: 2, label: formatLabel('Мобильная адаптация', 799), value: 'Мобильная адаптация', price: 799 },
      { id: 3, label: formatLabel('Анимации и интерактив', 499), value: 'Анимации и интерактив', price: 499 },
    ],
    'Корпоративный сайт': [
      { id: 1, label: formatLabel('Уникальный дизайн', 1999), value: 'Уникальный дизайн', price: 1999 },
      { id: 2, label: formatLabel('Мобильная адаптация', 1499), value: 'Мобильная адаптация', price: 1499 },
      { id: 3, label: formatLabel('Темная/светлая тема', 599), value: 'Темная/светлая тема', price: 1999 },
    ],
    'Интернет-магазин': [
      { id: 1, label: formatLabel('Уникальный дизайн', 2999), value: 'Уникальный дизайн', price: 2999 },
      { id: 2, label: formatLabel('Мобильная адаптация', 1999), value: 'Мобильная адаптация', price: 1999 },
      { id: 3, label: formatLabel('Анимации и баннеры', 899), value: 'Анимации и баннеры', price: 899 },
    ],
    'Сайт-каталог': [
      { id: 1, label: formatLabel('Уникальный дизайн', 1499), value: 'Уникальный дизайн', price: 1499 },
      { id: 2, label: formatLabel('Мобильная адаптация', 999), value: 'Мобильная адаптация', price: 999 },
      { id: 3, label: formatLabel('Фильтры и сортировка', 799), value: 'Фильтры и сортировка', price: 799 },
    ],
    'Многостраничный сайт': [
      { id: 1, label: formatLabel('Уникальный дизайн', 1999), value: 'Уникальный дизайн', price: 1999 },
      { id: 2, label: formatLabel('Мобильная адаптация', 1299), value: 'Мобильная адаптация', price: 1299 },
      { id: 3, label: formatLabel('Модульная структура', 899), value: 'Модульная структура', price: 899 },
    ],
    'Сайт-визитка': [
      { id: 1, label: formatLabel('Простой дизайн', 799), value: 'Простой дизайн', price: 799 },
      { id: 2, label: formatLabel('Мобильная адаптация', 799), value: 'Мобильная адаптация', price: 799 },
    ],
  }
  
  const functionalityData: Record<string, IDropdownItem[]> = {
    'Landing Page': [
      { id: 1, label: formatLabel('Обратная связь', 499), value: 'Обратная связь', price: 499 },
      { id: 2, label: formatLabel('Онлайн-оплата', 1599), value: 'Онлайн-оплата', price: 1599 },
      { id: 3, label: formatLabel('Слайдер/галерея', 799), value: 'Слайдер/галерея', price: 799 },
      { id: 4, label: formatLabel('Заявки в Телеграм', 499), value: 'Заявки в Телеграм', price: 499 }, // Новая функция
    ],
    'Корпоративный сайт': [
      { id: 1, label: formatLabel('Обратная связь', 499), value: 'Обратная связь', price: 499 },
      { id: 2, label: formatLabel('Онлайн-оплата', 1999), value: 'Онлайн-оплата', price: 1999 },
      { id: 3, label: formatLabel('Личный кабинет', 3999), value: 'Личный кабинет', price: 3999 },
      { id: 4, label: formatLabel('Мультиязычность', 1199), value: 'Мультиязычность', price: 1199 },
      { id: 6, label: formatLabel('Заявки в Телеграм', 499), value: 'Заявки в Телеграм', price: 499 }, // Новая функция
    ],
    'Интернет-магазин': [
      { id: 1, label: formatLabel('Корзина и оплата', 2499), value: 'Корзина и оплата', price: 2499 },
      { id: 2, label: formatLabel('Фильтры и поиск', 1299), value: 'Фильтры и поиск', price: 1299 },
      { id: 3, label: formatLabel('Личный кабинет', 3999), value: 'Личный кабинет', price: 3999 },
      // { id: 4, label: formatLabel('Интеграция с 1С', 14999), value: 'Интеграция с 1С', price: 14999 },
      { id: 5, label: formatLabel('Заявки в Телеграм', 499), value: 'Заявки в Телеграм', price: 499 }, // Новая функция
    ],
    'Сайт-каталог': [
      { id: 1, label: formatLabel('Фильтрация товаров', 999), value: 'Фильтрация товаров', price: 999 },
      { id: 2, label: formatLabel('Форма заказа', 599), value: 'Форма заказа', price: 599 },
      { id: 3, label: formatLabel('Слайдеры/категории', 799), value: 'Слайдеры/категории', price: 799 },
      { id: 4, label: formatLabel('Заявки в Телеграм', 499), value: 'Заявки в Телеграм', price: 499 }, // Новая функция
    ],
    'Многостраничный сайт': [
      { id: 1, label: formatLabel('Обратная связь', 499), value: 'Обратная связь', price: 499 },
      { id: 2, label: formatLabel('Форма обратной связи', 799), value: 'Форма обратной связи', price: 799 },
      { id: 3, label: formatLabel('Новости и блог', 999), value: 'Новости и блог', price: 999 },
      { id: 4, label: formatLabel('Заявки в Телеграм', 499), value: 'Заявки в Телеграм', price: 499 }, // Новая функция
    ],
    'Сайт-визитка': [
      { id: 1, label: formatLabel('Форма заявки', 399), value: 'Форма заявки', price: 399 },
      { id: 2, label: formatLabel('Галерея', 499), value: 'Галерея', price: 499 },
      { id: 3, label: formatLabel('Заявки в Телеграм', 299), value: 'Заявки в Телеграм', price: 299 }, // Новая функция
    ],
  }
  
  const marketingData: IDropdownItem[] = [
    { id: 1, label: formatLabel('Базовое SEO', 0), value: 'Базовое SEO', price: 0 },
    { id: 2, label: formatLabel('Продвинутое SEO', 899), value: 'Продвинутое SEO', price: 899 },
    { id: 3, label: formatLabel('Аналитика', 799), value: 'Аналитика', price: 799 },
    { id: 4, label: formatLabel('Онлайн-чат', 599), value: 'Онлайн-чат', price: 599 },
    // { id: 4, label: formatLabel('Интеграция с соцсетями', 699), value: 'Интеграция с соцсетями', price: 699 },
  ]
  
  const adminData: IDropdownItem[] = [
    { id: 1, label: formatLabel('Панель управления', 1499), value: 'Панель управления', price: 1499 },
    { id: 3, label: formatLabel('Резервное копирование', 999), value: 'Резервное копирование', price: 999 },
    { id: 4, label: formatLabel('Хостинг и SSL', 999), value: 'Хостинг и SSL', price: 999 },
  ]

  const supportData: IDropdownItem[] = [
    { id: 1, label: formatLabel('Контент менеджер/месяц', 1499), value: 'Панель управления/месяц', price: 1499 },
    { id: 2, label: formatLabel('Поддержка и обновление/месяц', 1499), value: 'Поддержка и обновление/месяц', price: 1499 },
    { id: 8, label: formatLabel('Обучение и консультации', 0), value: 'Обучение и консультации', price: 0 },
  ]
    

  useEffect(() => {
    const collectPrices = (
      selectedIds: number[],
      sourceData: IDropdownItem[],
      categoryLabel: string
    ) => {
      const selected = sourceData.filter((item) => selectedIds.includes(item.id))
      return selected.reduce((acc, item) => {
        acc[`${categoryLabel}: ${item.label}`] = item.price ?? 0
        return acc
      }, {} as Record<string, number>)
    }

    const allSelected = {
      ...collectPrices(paymentOptions, paymentData, 'Тип сайта'),
      ...collectPrices(designOptions, designData[selectedSiteType], 'Дизайн и UI'),
      ...collectPrices(functionalityOptions, functionalityData[selectedSiteType], 'Функциональность'),
      ...collectPrices(adminOptions, adminData, 'Администрирование'),
      ...collectPrices(marketingOptions, marketingData, 'Продвижение и аналитика'),
      ...collectPrices(supportOptions, supportData, 'Поддержка'),
    }

    setSelectedOptions(allSelected)
    setTotal(Object.values(allSelected).reduce((sum, price) => sum + price, 0))
  }, [paymentOptions, designOptions, functionalityOptions, adminOptions, marketingOptions, supportOptions, selectedSiteType])
  useEffect(() => {
    setDesignOptions([])
    setFunctionalityOptions([])
    setAdminOptions([])
    setMarketingOptions([])
    setSupportOptions([])
  }, [selectedSiteType])
  const onSubmit = async (data: FormData) => {
    let text = `<b>Новая заявка с конструктора сайта</b>\n\n`
    text += `<b>Имя:</b> ${data.name}\n`
    text += `<b>Телефон:</b> ${data.number}\n`
    text += `<b>Email:</b> ${data.gmail}\n\n`
    text += `<b>Выбранные опции:</b>\n`

    Object.entries(selectedOptions).forEach(([label, price]) => {
      text += `- ${label} \n`
    })

    text += `\n<b>Итоговая стоимость:</b> ${total} сомони`

    try {
      await fetch(`https://api.telegram.org/bot7393488523:AAEOT0g2Vou4NnHxgD51NdrDi3B3gO8a63Y/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: -1002691959947,
          parse_mode: 'HTML',
          text,
        }),
      })

      toast.success('Заявка успешно отправлена!')
      reset()
      setSelectedOptions({})
      setActive(false)
    } catch (e) {
      toast.error('Ошибка при отправке!')
      console.error(e)
    }
  }

  return (
    <section className={classes.section}>
      <div className={classes.content}>
        <Dropdown
          label="Тип сайта"
          items={paymentData}
          state={paymentOptions}
          setState={setPaymentOptions}
          onChange={(value) => setSelectedSiteType(value)}
        />
        <Dropdown label="Дизайн и UI" items={designData[selectedSiteType]} state={designOptions} setState={setDesignOptions} multiple />
        <Dropdown label="Функциональность" items={functionalityData[selectedSiteType]} state={functionalityOptions} setState={setFunctionalityOptions} multiple />
        <Dropdown label="Администрирование" items={adminData} state={adminOptions} setState={setAdminOptions} multiple />
        <Dropdown label="Продвижение и аналитика" items={marketingData} state={marketingOptions} setState={setMarketingOptions} multiple />
        <Dropdown label="Поддержка" items={supportData} state={supportOptions} setState={setSupportOptions} multiple />
      </div>

      <div className={classes.formBlock}>
        <div className={classes.total}>
          Итоговая стоимость:
          <div><AnimatedPrice targetPrice={total} duration={500} /></div>
        </div>
        <Button buttonSize="medium" onClick={() => setActive(!avitve)} className={classes.mobile_button}>
          Оставить заявку
        </Button>
        <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
          <Input label="Имя" placeholder="Ваше имя" {...register('name', { required: 'Введите имя' })} />
          <Input label="Номер телефона" placeholder="Номер телефона" {...register('number', { required: 'Введите номер' })} />
          <Input label="Почта или Телеграм" placeholder="Почта" {...register('gmail')} />
          <Button type="submit" disabled={isSubmitting} buttonSize="medium">
            {isSubmitting ? <BarLoader color="#fff" width={18} height={18} size={3} /> : 'Отправить заявку'}
          </Button>
        </form>
      </div>

      <Modal isShowCloseButton isOpen={avitve} close={() => setActive(false)} contentClassName={classes.modal}>
        <div className={classes.total}>
          Итоговая стоимость:
          <div><AnimatedPrice targetPrice={total} duration={500} /></div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className={classes.modal_form} style={{ display: avitve ? 'flex' : 'none' }}>
          <Input label="Имя" placeholder="Ваше имя" {...register('name', { required: 'Введите имя' })} />
          <Input label="Номер телефона" placeholder="Номер телефона" {...register('number', { required: 'Введите номер' })} />
          <Input label="Почта или Телеграм" placeholder="Почта" {...register('gmail')} />
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? <BarLoader color="#fff" width={18} height={18} size={3} /> : 'Отправить заявку'}
          </Button>
        </form>
      </Modal>
    </section>
  )
}
