import classes from './GalleryMobile.module.scss'
import { GalleryProps } from '../Gallery/Gallery'
import { IGallery } from '../../../../model/IGallery'  
import { Swiper, SwiperSlide } from 'swiper/react'
import GalleryMobileSlider from '../GalleryMobileSlider/GalleryMobileSlider' 
import { Wrapper } from '@shared/ui/Wrapper' 
import { HandySvg } from 'handy-svg'
import GalleryModal from '@shared/ui/GalleryModal' 
import { useState } from 'react'
import clsx from 'clsx'

interface GalleryMobileProps extends GalleryProps {
	activeId: number | null
	onClick: (id: number) => void
	image: IGallery
}

function GalleryMobile({
	activeId,
	onClick,
	images,
	image,
	buttons
}: GalleryMobileProps) {
	const [open, setOpen] = useState(false)
	const [addressOpen, setAddressOpen] = useState(false)
	const [initialSlide, setInitialSlide] = useState<number | null>(null)

	return (
		<div>
			<GalleryModal
				open={open}
				pictures={images.map(({ img, id }) => ({ id, image: img }))}
				close={() => setOpen(false)}
				activeId={initialSlide ?? undefined}
			/>
			<div className={classes.GalleryMobile}>
				<GalleryMobileSlider
					onClick={(id) => {
						setOpen(true)
						setInitialSlide(images.findIndex((image) => image.id === id))
					}}
					images={images}
					buttonChildren={buttons}
				/>
			</div>
		</div>
	)
}

export default GalleryMobile