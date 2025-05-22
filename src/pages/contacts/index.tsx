import { ContactsPage } from "@widgets/contacts"
import useTranslation from "next-translate/useTranslation"
import Head from "next/head"

export default function Page() {
    const { t } = useTranslation('common')

    return <>
        <Head>
            <title>Контакты | Sabt - наши контакты</title>
            <meta name='description' content='Можете связаться с нами любими удобными для вас способами' />
        </Head>
        <ContactsPage />
    </>
}
