'use client'
import classes from './pagination.module.scss'
import ReactPaginate from 'react-paginate'
import clsx from 'clsx'
import { useWindowSize } from 'usehooks-ts'
import { useEffect, useState } from 'react'
import { HandySvg } from 'handy-svg'

interface Props {
	handlePageClick: any
	pageCount: number
	className?: string
	type?: 1 | 2
	[key: string]: any
}

function Pagination({ handlePageClick, className, pageCount, type,...keys }: Props) {
	const [marginPage, setMarginPage] = useState(3)
	const { width } = useWindowSize()

	useEffect(() => {
		if (width >= 1440) {
			setMarginPage(7)
		}
		if (width >= 1200 && width < 1440) {
			setMarginPage(7)
		}
		if (width >= 1024 && width < 1200) {
			setMarginPage(4)
		}
		if (width < 1024 && width > 767) {
			setMarginPage(4)
		}
		if (width < 767) {
			setMarginPage(3)
		}
		if (width < 600) {
			setMarginPage(3)
		}
		if (width < 530) {
			setMarginPage(3)
		}
		if (width < 440) {
			setMarginPage(2)
		}
		if (width < 360) {
			setMarginPage(2)
		}
		// if ()
	}, [width])

	if (pageCount === 1) {
		return null
	}

	return (
		<ReactPaginate
			className={clsx(classes.Pagination, className)}
			breakLabel="..."
			nextLabel={(
				<HandySvg
					className={classes.RightIcon}
					src="/assets/icons/chevron-right.svg"
					width={16}
					height={16}
				/>
			)}
			onPageChange={handlePageClick}
			pageRangeDisplayed={marginPage}
			marginPagesDisplayed={marginPage}
			pageCount={pageCount}
			disabledClassName={classes.Disabled}
			previousLabel={(
				<HandySvg
					className={classes.LeftIcon}
					src="/assets/icons/chevron-left.svg"
					width={16}
					height={16}
				/>
			)}
			previousLinkClassName={classes.Prev}
			nextLinkClassName={classes.Next}
			nextClassName={classes.Next}
			previousClassName={classes.Prev}
			pageClassName={classes.Page}
			activeClassName={clsx(type == 2 ? classes.type_2 : classes.ActivePage )}
			breakClassName={classes.Break}
			{...keys}
		/>
	)
}

export { Pagination }