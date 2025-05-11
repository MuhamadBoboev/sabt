'use client'
import classes from './GallerySlider.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Navigation, Pagination } from 'swiper/modules'
import { HandySvg } from 'handy-svg'
import { IImage } from '@shared/model/IImage'
import SliderNav from '@shared/ui/SliderNav/SliderNav'
import clsx from 'clsx'
import Image from 'next/image'

interface GallerySliderProps {
	images: IImage[]
	onClick: (id: number) => void
}

function GallerySlider({ images, onClick }: GallerySliderProps) {

	return (
			<div className={classes.GallerySlider}>
				<Swiper
					className={classes.Swiper}
					pagination={{
						enabled: true,
						clickable: true,
						el: '#gallery-pagination',
						bulletClass: 'slider-custom-pagination-bullet',
						bulletActiveClass: 'slider-custom-pagination-bullet-active',
					}}
					navigation={{
						enabled: true,
						nextEl: '#gallery-nav-next',
						prevEl: '#gallery-nav-prev',
					}}
					slidesPerView={1}
					spaceBetween={28}
					modules={[Pagination, Navigation]}
					breakpoints={{
						1360: {
							spaceBetween: 28
						},
						1024: {
							spaceBetween: 20
						}
					}}
				>
					{images.map(({ img, id }) => (
						<SwiperSlide
							key={id}
							className={classes.Slide}
						>
							<Image
								onClick={() => onClick(id)}
								className={classes.Image}
								src={img}
								alt={String(id)}
								width={1550}
								height={850}
								quality={100}
							/>
							<button 
								className={classes.show_button} 
								onClick={() => onClick(id)}
								>
								<HandySvg 
									src='/assets/icons/show-image.svg' 
									width={18}
									height={18}
									alt='show'
									/>
							</button>
						</SwiperSlide>
					))}
				</Swiper>
				<div className={classes.Navigation} >
					<SliderNav  
						className={classes.nav_buttons}
						prevId="gallery-nav-prev"
						nextId="gallery-nav-next"
						theme='light'
						/>
				</div>
				<div id={'gallery-pagination'}  
					className={clsx(
					"slider-custom-pagination",
					"slider-custom-pagination-light",
					classes.bullets
					)} >
				</div>
			</div>
	)
}

export default GallerySlider