import { Services } from "@widgets/services"
import useTranslation from "next-translate/useTranslation"
import Head from "next/head"

export default function Page() {
    const { t } = useTranslation('common')

    return <>
        <Head>
            <title>Услуги | WeBrand - Ведущая Digital Agency в Душанбе</title>
            <meta name='description' content='Мы предлагаем широкий спектр услуг: веб-дизайн, разработка сайтов, эквайринг, SMM и анимация. Убедитесь, что ваш бизнес выделяется с WeBrand!' />
        </Head>
        <Services />
    </>
}
