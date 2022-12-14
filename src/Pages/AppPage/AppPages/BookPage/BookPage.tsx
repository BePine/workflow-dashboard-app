import { ChangeEvent, FormEvent, useContext, useEffect, useState } from 'react';
import './bookPage.css'
import PageContext, { CalendarStringType } from '../../../../Contexts/PageContext';
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
	const lastDayDate = new Date(date.getFullYear(), date.getMonth() + 1, 0);
	const lastDay = lastDayDate.getDate();
	const { coloredTiles, titleForTiles } = useContext(PageContext);
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
	// useEffect(()=>{
	// 	if(coloredTiles !== undefined && coloredTiles.length !==0){
			
	// 	}
	// 	else{

	// 	}

	// },[])
	const handleTileClick = (tile: number) => {
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
	const handleSet = (e: FormEvent) => {
		e.preventDefault();
		coloredTiles[tileHandle] = 'lightcoral';
		titleForTiles[tileHandle]= inputValue
		setHiddenMenu(0);
		setInputValue('');
		setTileHandle(0)

	};
	const handleResetClick = () => {
		coloredTiles[tileHandle] = 'white';
		titleForTiles[tileHandle]= ''
		setHiddenMenu(0);
		setInputValue('');
	};
	return (
		<>
			<div className="bookPage" data-testid='bookPageTest'>
				<img className="imgBook" src={profileImageUrl} alt='' />
				<div className="upperDate">
					{monthName} {day}
				</div>
				<h4>upcoming task reports</h4>
				<div className='closestDays'>
					{date.getDate() - 1 ? (
						<div style={{background: coloredTiles[date.getDate() - 1]}}>
							<p>{date.getDate() - 1}</p>
							<p>{date.getDay() - 1<0?weekday[6]: weekday[date.getDay() - 1]}</p>
							{titleForTiles[date.getDate()-1]!=='' && titleForTiles[date.getDate()-1]!== undefined? <div className="commentBox">{titleForTiles[date.getDate()-1]}</div> : null}
						</div>
						
					) : null}
					<div style={{background: coloredTiles[date.getDate()]}}>
						<p>{date.getDate()}</p>
						<p>{weekday[date.getDay()]}</p>
						{titleForTiles[date.getDate()]!=='' && titleForTiles[date.getDate()]!== undefined? <div className="commentBox">{titleForTiles[date.getDate()]}</div> : null}
					</div>
					{date.getDate() + 1 <= lastDay ? (
						<div style={{background: coloredTiles[date.getDate() + 1]}}>
							<p>{date.getDate() + 1}</p>
							<p>{date.getDay() + 1>6? weekday[0] : weekday[date.getDay() + 1]}</p>
						{titleForTiles[date.getDate()+1]!=='' && titleForTiles[date.getDate()+1]!== undefined? <div className="commentBox">{titleForTiles[date.getDate()+1]}</div> : null}
						</div>
					) : null}
					{date.getDate() + 2 <= lastDay ? (
						<div style={{background: coloredTiles[date.getDate() + 2]}}>
							<p>{date.getDate() + 2}</p>
							<p>{date.getDay() + 2>6? date.getDay() + 2>7?weekday[1]:weekday[0] : weekday[date.getDay() + 2]}</p>
							{titleForTiles[date.getDate()+2]!=='' && titleForTiles[date.getDate()+2]!== undefined? <div className="commentBox">{titleForTiles[date.getDate()+2]}</div> : null}
						
						</div>
					) : null}
				</div>
				<h3>
					Monthly<br></br>Task Report
				</h3>
				<div className='calendar'>
					{calendar.map((tile, index) => (
						<div key={index}>
							<div
								className='calendarTile'
								key={index}
								style={{background:coloredTiles[tile]}}
								onClick={() => {
									handleTileClick(tile);
								}}
							>
								{tile}
								{titleForTiles[tile]!=='' && titleForTiles[tile]!== undefined? <div className="commentBox">{titleForTiles[tile]}</div> : null}
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
									<button className="click" type='submit'>set</button>
								</form>
								<button className="click" onClick={handleResetClick}>clear all for this day</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default BookPage;
