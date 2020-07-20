import React, { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'

const StudentBar = ({ name, spi, sdc, odc, ee, catToSortBy, catColor }) => {
	const motionControl = useAnimation()
	const [sliderBarValue, setSliderBarValue] = useState(spi)
	const [sliderBarCategory, setSliderBarCategory] = useState(catToSortBy)

	// When the Category to sort by changes -> test value and set the sliderbar width to match
	useEffect(() => {
		switch (catToSortBy) {
			case 'sdc':
				setSliderBarValue(sdc)
				break
			case 'odc':
				setSliderBarValue(odc)
				break
			case 'ee':
				setSliderBarValue(ee)
				break
			default:
				setSliderBarValue(spi)
		}
	}, [catToSortBy])

	useEffect(() => {
		console.log('sliderBarValue = ', sliderBarValue)
		motionControl.start({
			width: sliderBarValue + '%',
		})
	}, [sliderBarValue])

	return (
		<div className="student-bar">
			<div className="student-bar__upper-bar">
				<h5>{name}</h5>
			</div>
			<div className="student-bar__lower-bar">
				<ul className="student-bar__data">
					<li className="student-bar__data--spi">
						<span className="key key--spi">SPI:</span>{' '}
						<span className="value value--spi">{spi}%</span>
					</li>
					<li className="student-bar__data--sdc">
						<span className="key key--sdc">SDC:</span>{' '}
						<span className="value value--sdc">{sdc}%</span>
					</li>
					<li className="student-bar__data--odc">
						<span className="key key--odc">ODC:</span>{' '}
						<span className="value value--odc">{odc}%</span>
					</li>
					<li className="student-bar__data--ee">
						<span className="key key--ee">E&E:</span>{' '}
						<span className="value value--ee">{ee}%</span>
					</li>
				</ul>
				<motion.div
					className="student-bar__progress-bar"
					style={{
						backgroundColor: catColor,
					}}
					initial={{ width: sliderBarValue + '%' }}
					animate={motionControl}
				></motion.div>
			</div>
		</div>
	)
}

export default StudentBar
