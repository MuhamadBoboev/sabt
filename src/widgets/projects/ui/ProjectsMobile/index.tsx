import classes from './projects-mobile.module.scss'
import SliderNav from "@shared/ui/SliderNav/SliderNav"
import { IProjectCard } from "@widgets/projects/model/IProjectCard"
import { FreeMode, Navigation, Thumbs, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react';
import { type Swiper as SwiperTypes } from "swiper";
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import clsx from 'clsx';
import { ProjectCard } from '../ProjectCard';
import { Wrapper } from '@shared/ui/Wrapper';
interface Props {
    items: IProjectCard[]
}
export const ProjectsMobile = ({items}: Props) => {
    return <div className={classes.body}>
    <Swiper
        spaceBetween={15}
        slidesPerView={1}
        modules={[Navigation, FreeMode, Thumbs, Pagination]}
        className={classes.mySwiper2}
        navigation={{
            prevEl: "#mobile-news-prev",
            nextEl: "#mobile-news-next",
            enabled: true,
        }}
        pagination={{ 
            enabled: true,
            el: '#bullet-mobile-news',
            bulletClass: 'slider-custom-pagination-bullet',
            bulletActiveClass: 'slider-custom-pagination-bullet-active',
            clickable: true 
        }}
    >
        {items.map((item) => (
            <SwiperSlide
                key={item.id}
                className={classes.Item_main_slide}
            >
            </SwiperSlide>
        ))}
    </Swiper>
    <div className={classes.bottom} >
            <SliderNav 
            className={classes.nav}
            prevId="mobile-news-prev"
            nextId="mobile-news-next"
            theme='light'
            >
            <div id={'bullet-mobile-news'}  
                className={clsx(
                "slider-custom-pagination",
                "slider-custom-pagination-light",
                classes.bullets
                )} >
            </div>
            </SliderNav>
        </div>
</div>
}