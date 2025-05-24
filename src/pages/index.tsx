import { СlientsSection } from "@widgets/clients";
import Head from "next/head";
import { MainBanner } from "@widgets/mainBanner";
import { PhotoGallery } from "@widgets/photoGallery";
import { ServicesSection } from "@widgets/services";
import { AboutContent } from "@widgets/price/ui/PriceContent";
import { SolutionsSection } from "@widgets/solutions";
import { Team } from "@widgets/price/ui/Team";
import { ProjectsSection } from "@widgets/projects";
import { Sabt } from "@widgets/sabt";



export default function Home() {
    return (
        <>
            <Head>
                <title>Sabt — Онлайн запись в Таджикистане для любого бизнеса</title>
                <meta name="description" content="Удобная и быстрая онлайн запись на услуги в Таджикистане. Sabt помогает клиентам легко записаться, а бизнесу — эффективно управлять приёмами." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <MainBanner />
                <Sabt />
                {/* <ProjectsSection /> */}
                {/* <ServicesSection /> */}
                {/* <Team /> */}            
                {/* <AboutContent /> */}    
                {/* <SolutionsSection /> */}
				{/* <СlientsSection /> */}  
                {/* <PhotoGallery  /> */}   
            </main>
        </>
    );
}
