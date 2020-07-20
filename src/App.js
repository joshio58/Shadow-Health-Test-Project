import React, { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import Layout from './components/Layout'
import Sidebar from './components/Sidebar'
import PerformanceWidget from './components/PerformanceWidget'
import { mainContentWidth } from './utils/motion/variants'

const App = ({ title }) => {
	const [isSideBarActive, setIsSideBarActive] = useState(false)
	const motionControl = useAnimation()

	useEffect(() => {
		console.log('isSideBarActive = ', isSideBarActive)
		isSideBarActive ? motionControl.start('collapse') : motionControl.start('expand')
	}, [isSideBarActive])

	return (
		<Layout title={title} isSideBarActive={isSideBarActive}>
			<motion.div
				className="main-content"
				initial={isSideBarActive ? 'collapse' : 'expand'}
				variants={mainContentWidth}
				animate={motionControl}
			>
				<div className="container">
					<PerformanceWidget />
				</div>
			</motion.div>
			<Sidebar isSideBarActive={setIsSideBarActive} />
		</Layout>
	)
}

export default App
