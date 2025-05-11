'use client'
import classes from './Gallery.module.scss'
import { ReactNode, useState } from 'react'
import { getMinId } from '@shared/lib/getMinId'
import { HandySvg } from 'handy-svg'
import GallerySlider from '../GallerySlider/GallerySlider' 
import { useWindowSize } from 'usehooks-ts'
import GalleryMobile from '../GalleryMobile/GalleryMobile' 
import GalleryModal from '@shared/ui/GalleryModal' 
import { IGallery } from '../../../../model/IGallery'

export interface GalleryProps {
	className?: string 
	images: IGallery[]
	buttons?: ReactNode
	id?: number
}

function Gallery({ images, buttons, id, className }: GalleryProps) {
	
	const [activeId, setActiveId] = useState<number | null>(
		getMinId(images.map(({ id }) => id))
	)
	const [initialSlide, setInitialSlide] = useState<number | null>(null)
	const { width } = useWindowSize()
	const [open, setOpen] = useState(false)
		
	if (images.length === 0) return null

	
	const image = images.find(({ id }) => id === activeId)!
	

	return (
		<div className={className} >
			<div className={classes.mobile}>
				<GalleryMobile
					activeId={activeId}
					onClick={setActiveId}
					image={image}
					images={images}
					buttons={buttons}
					id={id}
				/>
			</div>
			<div className={classes.desktop} >
				<GalleryModal
					open={open}
					pictures={images.map(({ img, id }) => ({ id, image: img }))}
					close={() => setOpen(false)}
					activeId={initialSlide ?? undefined}
				/>
					{<GallerySlider
						onClick={(id) => {
							setOpen(true)
							setActiveId(id)
							setInitialSlide(images.findIndex((image) => image.id === id))
						}}
						images={images}
					/>}
			</div>
		</div>
	)
}

export default Gallery
