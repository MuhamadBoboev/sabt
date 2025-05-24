
import { Faq } from "@widgets/faq/ui/faq"
import useTranslation from "next-translate/useTranslation"
import Head from "next/head"

export default function Page() {
    const { t } = useTranslation('common')

    return <>
        <Head>
            <title>Вопросы | Sabt - Вопросы</title>
            <meta name='description' content='Задавайте интересующие вопросы' />
        </Head>
        <Faq />
    </>
}
