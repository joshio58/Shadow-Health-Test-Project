import React, { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import marked from 'marked'
import { slideInFromRight } from '../utils/motion/variants'
import MarkDownFile from '../md_pages/design_spec.md'

const Sidebar = ({ isSideBarActive }) => {
	// Sidebar Motion
	const [sidebarActive, setSidebarActive] = useState(false)
	const motionControl = useAnimation()

	const sidebarToggleClick = e => {
		// console.log('e = ', e)
		setSidebarActive(!sidebarActive)
		sidebarActive ? motionControl.start('hidden') : motionControl.start('visible')
	}

	useEffect(() => {
		isSideBarActive(sidebarActive)
	}, [sidebarActive])

	return (
		<>
			<motion.div
				id="sidebar"
				className={`sidebar${sidebarActive ? ' visible' : ' hidden'}`}
				variants={slideInFromRight}
				initial={sidebarActive ? 'visible' : 'hidden'}
				animate={motionControl}
			>
				<button
					className="btn sidebar__toggle-btn"
					onClick={e => sidebarToggleClick(e)}
				>
					<div className="sidebar__toggle-btn__text">
						Click To {sidebarActive ? 'Hide' : 'View'} Design Criteria
					</div>
				</button>
				<div className="sidebar__content-container">
					<div
						className="markdown-content"
						dangerouslySetInnerHTML={{ __html: MarkDownFile }}
					/>
				</div>
			</motion.div>
		</>
	)
}

export default Sidebar
