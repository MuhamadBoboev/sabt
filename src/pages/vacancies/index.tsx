import { Vacancies } from "@widgets/vacancies"
import useTranslation from "next-translate/useTranslation"
import Head from "next/head"

export default function Page() {
    const { t } = useTranslation('common')

    return <>
        <Head>
            <title>Вакансии | WeBrand - Ведущая Digital Agency в Душанбе</title>
            <meta name='description' content='Присоединяйтесь к команде WeBrand! Мы ищем талантливых специалистов в области веб-дизайна, разработки и SMM. Узнайте о наших открытых вакансиях.' />
        </Head>
        <Vacancies />
    </>
}
