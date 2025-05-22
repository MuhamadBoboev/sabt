import { Wrapper } from "@shared/ui/Wrapper"
import classes from './main-banner.module.scss'
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import clsx from "clsx";
import SliderNav from "@shared/ui/SliderNav/SliderNav";
import { Button } from "@shared/ui/Button";
import Image from "next/image";
import { UnderBanner } from "../UnderBanner";
import { IMainSlide } from "@widgets/mainBanner/model/MainBanner";
import useTranslation from "next-translate/useTranslation";
import { useApplicationStore } from "@widgets/application/model/applicationStore";
import { bannersData } from "@widgets/mainBanner/const/banners";

export const MainBanner = () => {

    const { t } = useTranslation('common')
    const { toggle } = useApplicationStore(state => (state))

    return <div className={classes.main_banner}>
        	<h1 className={classes.title}>
                Sabt – это онлайн-запись для вашего бизнеса
            </h1>
            <Wrapper>
                <div className={classes.banner} >
                    <Swiper
                        className={clsx(classes.swiper, classes.desktop)}
                        modules={[Navigation, Pagination, A11y, Autoplay]}
                        spaceBetween={10}
                        slidesPerView={1}
                        centeredSlides={true}
                        loop={true}
                        effect={'coverflow'}
                        speed={1000}
                        autoplay={{ delay: 3000, disableOnInteraction: false}}
                        navigation={{
                            prevEl: "#main-banner-prev",
                            nextEl: "#main-banner-next",
                            enabled: true,
                        }}
                        pagination={{ 
                            enabled: true,
                            el: '#bullet-main-banner',
                            bulletClass: 'slider-custom-pagination-bullet',
                            bulletActiveClass: 'slider-custom-pagination-bullet-active',
                            clickable: true 
                        }}
                        >
                            {bannersData.map((item, index) => 
                            <SwiperSlide key={index}>
                                <div className={classes.slide} >
                                    <div className={classes.bl_img} >
                                        <Image
                                            className={classes.img} 
                                            src={item.img}
                                            width={1300}
                                            height={620}
                                            alt={'banner'}
                                            />
                                    </div>
                                    {/* <div className={classes.bl_button} >
                                        <Button 
                                            bg='secondary'
                                            className={classes.button} 
                                            buttonSize='medium' 
                                            fullWidth
                                            onClick={toggle}
                                            >
                                            Связаться с нами
                                        </Button>
                                    </div> */}
                                </div>
                            </SwiperSlide>
                            )}
                    </Swiper>
                    {<Swiper
                        className={clsx(classes.swiper, classes.mobile)}
                        modules={[Navigation, Pagination, A11y, Autoplay]}
                        spaceBetween={10}
                        slidesPerView={1}
                        loop={true}
                        speed={1000}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        navigation={{
                            prevEl: "#main-banner-prev-2",
                            nextEl: "#main-banner-next-2",
                            enabled: true,
                        }}
                        pagination={{ 
                            enabled: true,
                            el: '#bullet-main-banner-2',
                            bulletClass: 'slider-custom-pagination-bullet',
                            bulletActiveClass: 'slider-custom-pagination-bullet-active',
                            clickable: true 
                        }}
                        >
                            {bannersData.map((item, index) => 
                            <SwiperSlide key={index}>
                                {item.img_mob && <div className={classes.slide} >
                                    <div className={classes.bl_img} >
                                        <Image
                                            className={classes.img} 
                                            src={item.img_mob}
                                            width={1390}
                                            height={620}
                                            alt={'banner'}
                                            />
                                    </div>
                                    <div className={classes.bl_button} >
                                        <Button 
                                            className={classes.button} 
                                            buttonSize='medium' 
                                            fullWidth
                                            onClick={() => toggle()}
                                            >
                                            Связаться с нами
                                        </Button>
                                    </div>
                                </div>}
                            </SwiperSlide>
                            )}
                    </Swiper>}
                    <div className={clsx(classes.bottom, classes.desktop)} >
                        <div id={'bullet-main-banner'}  
                            className={clsx(
                            "slider-custom-pagination",
                            "slider-custom-pagination-light",
                            classes.bullets
                            )} >
                        </div>
                    </div>
                    {bannersData.some((item) => item.img_mob ) && <div className={clsx(classes.bottom, classes.mobile)} >
                        <div id={'bullet-main-banner-2'}  
                            className={clsx(
                            "slider-custom-pagination",
                            "slider-custom-pagination-light",
                            classes.bullets
                            )} >
                        </div>
                    </div>}

                    {/* <div className={clsx(classes.bottom, classes.desktop)} >
                        <SliderNav 
                        className={classes.nav}
                        prevId="main-banner-prev"
                        nextId="main-banner-next"
                        theme='light'
                        >
                        <div id={'bullet-main-banner'}  
                            className={clsx(
                            "slider-custom-pagination",
                            "slider-custom-pagination-light",
                            classes.bullets
                            )} >
                        </div>
                        </SliderNav>
                    </div> */}
                    {/* {bannersData.some((item) => item.img_mob ) && <div className={clsx(classes.bottom, classes.mobile)} >
                        <SliderNav 
                        className={classes.nav}
                        prevId="main-banner-prev-2"
                        nextId="main-banner-next-2"
                        theme='light'
                        >
                        <div id={'bullet-main-banner-2'}  
                            className={clsx(
                            "slider-custom-pagination",
                            "slider-custom-pagination-light",
                            classes.bullets
                            )} >
                        </div>
                        </SliderNav>
                    </div>} */}
                </div>
            {/* <UnderBanner /> */}
            </Wrapper>
    </div>
}