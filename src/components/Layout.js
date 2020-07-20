import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { mainContentWidth } from '../utils/motion/variants'

import '../styles/main.css'

const Layout = ({ children, title, isSideBarActive }) => {
	const motionControl = useAnimation()

	useEffect(() => {
		console.log('isSideBarActive = ', isSideBarActive)
		isSideBarActive ? motionControl.start('collapse') : motionControl.start('expand')
	}, [isSideBarActive])

	return (
		<>
			{/* <motion.header
				className="header header__main"
				initial={isSideBarActive ? 'collapse' : 'expand'}
				variants={mainContentWidth}
				animate={motionControl}
			>
				<h1>{title}</h1>
			</motion.header> */}
			<div className="content-container">{children}</div>
		</>
	)
}

export default Layout
