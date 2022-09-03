import { ChangeEvent, FormEvent, useContext, useEffect, useState } from 'react';
import './bookPage.css'
import PageContext from '../../../../Contexts/PageContext';
const BookPage = () => {
	const monthNames = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];
	const weekday = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
	];
	const profileImageUrl = require('../../../../Assets/Images/icons8-test-account-50.png');
	const date = new Date();
	const day = date.getDate();
	const month = date.getMonth();
	const monthName = monthNames[month];
	const year = date.getFullYear();
	const lastDayDate = new Date(date.getFullYear(), date.getMonth() + 1, 0);
	const lastDay = lastDayDate.getDate();
	const { coloredTiles, setColoredTiles } = useContext(PageContext);
	const [loopCheck, setLoopCheck] = useState(0);
	const [calendar, setCalendar] = useState<number[]>([]);
	const [hiddenMenu, setHiddenMenu] = useState(0);
	const [inputValue, setInputValue] = useState('');
	const [tileHandle, setTileHandle] = useState<number>(0)
	for (let i = 1; i <= lastDay; i++) {
		if (loopCheck) {
			i = lastDay;
		} else {
			calendar.push(i);
			setLoopCheck(1);
		}
	}

	const handleTileClick = (tile: number) => {
		console.log('elo');
		setHiddenMenu(tile);
		setTileHandle(tile)
	};
	const handleClose = (e: React.MouseEvent<HTMLElement>) => {
		setHiddenMenu(0);
		setTileHandle(0)
	};
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value);
	};
	const handleSet = (e: any) => {
		e.preventDefault();
		coloredTiles[tileHandle] = 'red';
		console.log(coloredTiles[tileHandle])
		setHiddenMenu(0);
		setInputValue('');
		setTileHandle(0)

	};
	const handleResetClick = (e: any) => {
		coloredTiles[tileHandle] = 'white';
		setHiddenMenu(0);
		setInputValue('');
	};
	return (
		<>
			<img src={profileImageUrl} alt='' />
			<div>
				{monthName} {day}
			</div>
			<div className='closestDays'>
				{date.getDate() - 1 ? (
					<div style={{background: coloredTiles[date.getDate() - 1]}}>
						<p>{date.getDate() - 1}</p>
						<p>{weekday[date.getDay() - 1]}</p>
					</div>
				) : null}
				<div style={{background: coloredTiles[date.getDate()]}}>
					<p>{date.getDate()}</p>
					<p>{weekday[date.getDay()]}</p>
				</div>
				{date.getDate() + 1 <= lastDay ? (
					<div style={{background: coloredTiles[date.getDate() + 1]}}>
						<p>{date.getDate() + 1}</p>
						<p>{date.getDay() + 1>6? weekday[0] : weekday[date.getDay() + 1]}</p>
					</div>
				) : null}
				{date.getDate() + 2 <= lastDay ? (
					<div style={{background: coloredTiles[date.getDate() + 2]}}>
						<p>{date.getDate() + 2}</p>
						<p>{date.getDay() + 2>6? date.getDay() + 2>7?weekday[1]:weekday[0] : weekday[date.getDay() + 2]}</p>
					</div>
				) : null}

			</div>
			<h3>
				Monthly<br></br>Task Report
			</h3>
			<div className='calendar'>
				{calendar.map((tile, index) => (
					<div>
						<div
							className='calendarTile'
							key={index}
							style={{background:coloredTiles[tile]}}
							onClick={() => {
								handleTileClick(tile);
							}}
						>
							{tile}
						</div>
						<div
							className='hiddenMenu'
							style={
								hiddenMenu == tile ? { display: 'block' } : { display: 'none' }
							}
						>
							<div className='close' onClick={handleClose}>
								close
							</div>
							<form onSubmit={handleSet}>
								submit title for your task report
								<input
									type='text'
									placeholder='title'
									value={inputValue}
									onChange={handleChange}
								/>
								<button type='submit'>set</button>
							</form>
							<button onClick={handleResetClick}>clear all for this day</button>
						</div>
					</div>
				))}
			</div>
		</>
	);
};

export default BookPage;
