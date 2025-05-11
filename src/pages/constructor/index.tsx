import { Constructor } from "@widgets/constructor"
import useTranslation from "next-translate/useTranslation"
import Head from "next/head"

export default function Page() {
    const { t } = useTranslation('common')

    return <>
        <Head>
        <title>Рассчитать цену сайта | WeBrand - Ведущая Digital Agency в Душанбе</title>
        <meta name="description" content="Быстро рассчитайте стоимость создания сайта с нужным функционалом. Удобный онлайн-калькулятор от WeBrand поможет вам понять бюджет до начала проекта. Прозрачные цены, гибкие решения и индивидуальный подход — всё для вашего бизнеса в Душанбе и Таджикистане." />
        </Head>
        <Constructor />
    </>
}
