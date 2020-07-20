import React, { useState, useEffect } from 'react'
import StudentBar from './StudentBar'
import { students } from '../data/students'
// import HeaderWave from '../img/widget-title-wave.svg'
// import SVG from 'react-inlinesvg'

const PerformanceWidget = () => {
	const [studentArray, setStudentArray] = useState(students)
	const [catToSortBy, setCatToSortBy] = useState('spi')
	const [sortByOrder, setSortByOrder] = useState('asc')
	const [catColor, setCatColor] = useState('hsl(106, 86%, 23%)')

	const catColors = {
		spi: 'hsl(106, 86%, 23%)',
		sdc: 'hsl(346, 81%, 36%)',
		odc: 'hsl(226, 87%, 18%)',
		ee: 'hsl(346, 40%, 46%)',
	}

	const sortBy = category => {
		console.log('category = ', category)
		// If selected user category is equal to current category -> reverse the order Asc to Desc
		if (category === catToSortBy) {
			console.log('SAME')
			if (sortByOrder === 'asc') {
				setStudentArray(
					students.sort((a, b) => (a.category > b.category ? 1 : -1))
				)
				setSortByOrder('desc')
			} else {
				setStudentArray(
					students.sort((a, b) => (a.category < b.category ? 1 : -1))
				)
				setSortByOrder('asc')
			}
		}
		// else set the current category to the user selected category
		else {
			console.log('DIFF')
			setStudentArray(students.sort((a, b) => (a.category < b.category ? 1 : -1)))
		}
		setCatToSortBy(category)
	}

	// useEffect(() => {
	// 	console.log('studentArray = ', studentArray)
	// }, [studentArray])

	useEffect(() => {
		setCatColor(catColors[catToSortBy])
	}, [catToSortBy])

	return (
		<div className="performance-widget">
			<div className="performance-widget__title">
				<div className="performance-widget__title--main">
					<h2>Class Performance</h2>
				</div>
				<h4 className="performance-widget__title--sub">
					Low Students by{' '}
					<span
						className="performance-widget__title--sub__cat-name"
						style={{ backgroundColor: catColor }}
					>
						{catToSortBy.toUpperCase()}
					</span>
				</h4>
			</div>
			<div className="performance-widget__content">
				<h6>Sort Low Students By</h6>
				<div className="sort-by">
					<button className="btn btn-spi" onClick={() => sortBy('spi')}>
						SPI
					</button>
					<button className="btn btn-sdc" onClick={() => sortBy('sdc')}>
						SDC
					</button>
					<button className="btn btn-odc" onClick={() => sortBy('odc')}>
						ODC
					</button>
					<button className="btn btn-ee" onClick={() => sortBy('ee')}>
						E&E
					</button>
				</div>

				<div className="student-list">
					{studentArray.map((student, index) => {
						return (
							<StudentBar
								key={index}
								name={student.name}
								spi={student.spi}
								sdc={student.sdc}
								odc={student.odc}
								ee={student.ee}
								catToSortBy={catToSortBy}
								catColor={catColor}
							/>
						)
					})}
				</div>
			</div>
		</div>
	)
}

export default PerformanceWidget
