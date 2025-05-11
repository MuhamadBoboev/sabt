import classes from './GalleryMobileSlider.module.scss'
import { IGallery } from '../../../../model/IGallery'; 
import { Swiper, SwiperSlide } from 'swiper/react';
import React, { ReactNode, useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs, Pagination } from 'swiper/modules';
import { type Swiper as SwiperTypes } from "swiper";
import SliderNav from '@shared/ui/SliderNav/SliderNav';
import clsx from 'clsx';
import { HandySvg } from 'handy-svg';
import Image from 'next/image';



interface GalleryMobileSliderProps {
	onClick: (id: number) => void
	images: IGallery[]
	buttonChildren?: ReactNode
}

function GalleryMobileSlider({ images, onClick, buttonChildren }: GalleryMobileSliderProps) {
	const [thumbsSwiper, setThumbsSwiper] = useState(null);
	const [swiperInstance, setSwiperInstance] = useState<SwiperTypes | null>(null);

	return (
		<div className={classes.body}>
			<Swiper
				spaceBetween={15}
				slidesPerView={1}
				thumbs={{ swiper: swiperInstance }}
				modules={[Navigation, FreeMode, Thumbs, Pagination]}
				className={classes.mySwiper2}
				navigation={{
					prevEl: "#mobile-gallery-prev",
					nextEl: "#mobile-gallery-next",
					enabled: true,
				}}
				pagination={{ 
					enabled: true,
					el: '#bullet-mobile-gallry',
					bulletClass: 'slider-custom-pagination-bullet',
					bulletActiveClass: 'slider-custom-pagination-bullet-active',
					clickable: true 
				}}
			>
				{images.map(({ id, img }) => (
					<SwiperSlide
						key={id}
						className={classes.Item_main_slide}
					>
						<div className={classes.Item_main}>
							<Image
								className={classes.Image}
								onClick={(event) => {
									onClick(id)
									const target: any = event.currentTarget
									target.scrollIntoView({
										behavior: 'smooth',
										block: 'nearest'
									})
								}}
								src={img}
								alt={String(id)}
								width={800}
								height={600}
							/>
							<button 
								className={classes.show_button} 
								onClick={() => onClick(id)}
								>
								<HandySvg 
									src='/assets/icons/show-image.svg' 
									width={14}
									height={14}
									alt='show'
									/>
							</button>
							{buttonChildren}
						</div>
					</SwiperSlide>
				))}
			</Swiper>
			<div className={classes.bottom} >
                    <SliderNav 
                    className={classes.nav}
                    prevId="mobile-gallery-prev"
                    nextId="mobile-gallery-next"
                    theme='light'
                    >
                    <div id={'bullet-mobile-gallry'}  
                        className={clsx(
                        "slider-custom-pagination",
                        "slider-custom-pagination-light",
                        classes.bullets
                        )} >
                    </div>
                    </SliderNav>
                </div>
		</div>
	)
}

export default GalleryMobileSlider