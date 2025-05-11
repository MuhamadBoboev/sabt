import { About } from "@widgets/about"
import useTranslation from "next-translate/useTranslation"
import Head from "next/head"

export default function Page() {
    const { t } = useTranslation('common')

    return <>
        <Head>
            <title>О компании | WeBrand - Ведущая Digital Agency в Душанбе</title>
            <meta name='description' content='WeBrand — это команда профессионалов, которая предлагает инновационные решения в области веб-дизайна, разработки сайтов и SMM. Мы помогаем бизнесам расти и достигать новых высот в цифровом пространстве.' />
        </Head>
        <About />
    </>
}
