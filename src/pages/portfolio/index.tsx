import { Projects } from "@widgets/projects"
import useTranslation from "next-translate/useTranslation"
import Head from "next/head"

export default function Page() {
    const { t } = useTranslation('common')

    return <>
        <Head>
            <title>Наши работы | WeBrand - Ведущая Digital Agency в Душанбе</title>
            <meta name='description' content='Посмотрите наши успешные проекты в области веб-дизайна, разработки и SMM. WeBrand предлагает инновационные решения для бизнеса в Душанбе и по всему Таджикистану.' />
        </Head>
        <Projects />
    </>
}
