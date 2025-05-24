import { Price } from "@widgets/price"
import useTranslation from "next-translate/useTranslation"
import Head from "next/head"

export default function Page() {
    const { t } = useTranslation('common')

    return <>
        <Head>
            <title>Цены | Sabt - цены на тарифы</title>
            <meta name='description' content='Sabt - цены и тарифы' />
        </Head>
        <Price />
    </>
}
