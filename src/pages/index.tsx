import { СlientsSection } from "@widgets/clients";
import Head from "next/head";
import { MainBanner } from "@widgets/mainBanner";
import { PhotoGallery } from "@widgets/photoGallery";
import { ServicesSection } from "@widgets/services";
import { AboutContent } from "@widgets/about/ui/AboutContent";
import { SolutionsSection } from "@widgets/solutions";
import { Team } from "@widgets/about/ui/Team";



export default function Home() {
    return (
        <>
            <Head>
                <title>Sabt - Онлайн запись в Таджикистане</title>
                <meta name="description" content="Sabt" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <MainBanner />
                <ServicesSection />
                {/* <Team /> */}            
                {/* <AboutContent /> */}    
                {/* <SolutionsSection /> */}
				{/* <СlientsSection /> */}  
                {/* <PhotoGallery  /> */}    
            </main>
        </>
    );
}
