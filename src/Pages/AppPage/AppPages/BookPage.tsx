import { ChangeEvent, FormEvent, useEffect, useState } from 'react';

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
	const profileImageUrl = require('../../../Assets/Images/icons8-test-account-50.png');
	const date = new Date();
	const day = date.getDate();
	const month = date.getMonth();
	const monthName = monthNames[month];
	const year = date.getFullYear();
	const lastDayDate = new Date(date.getFullYear(), date.getMonth() + 1, 0);
	const lastDay = lastDayDate.getDate();
	const [loopCheck, setLoopCheck] = useState(0);
	const [calendar, setCalendar] = useState<number[]>([]);
	const [hiddenMenu, setHiddenMenu] = useState(0);
    const [inputValue, setInputValue] = useState('')
	for (let i = 1; i <= lastDay; i++) {
		if (loopCheck) {
			i = lastDay;
		} else {
			calendar.push(i);
			setLoopCheck(1);
		}
	}

	const handleTileClick = ( tile: number) => {
        console.log('elo')
        setHiddenMenu(tile)
        
	};
    const handleClose = (e:React.MouseEvent<HTMLElement>) => {
		setHiddenMenu(0);
        e.stopPropagation()

    }
    const handleChange = (e:ChangeEvent<HTMLInputElement>)=>{
        setInputValue(e.target.value)
    }
    const handleSet = (e:any) => {
        e.preventDefault()
        e.stopPropagation()
        e.currentTarget.parentElement.parentElement.title =  inputValue
		setHiddenMenu(0);
    }
    const handleResetClick = (e:any) => {
        e.stopPropagation()
        e.currentTarget.parentElement.parentElement.title =  ""
		setHiddenMenu(0);
        
    }
	return (
		<>
			<img src={profileImageUrl} alt='' />
			<div>
				{monthName} {day}
			</div>
			<div className='closestDays'>
				<div>{date.getDate() - 1 ? date.getDate() - 1 : null}</div>
				<div>{date.getDate()}</div>
				<div>{date.getDate() + 1 <= lastDay ? date.getDate() + 1 : null}</div>
				<div>{date.getDate() + 2 <= lastDay ? date.getDate() + 2 : null}</div>
			</div>
			<h3>
				Monthly<br></br>Task Report
			</h3>
			<div className='calendar'>
				{calendar.map((tile, index) => (
					<div className="calendarTile" key={index} onClick={()=>{ handleTileClick(tile)}}>
						{tile}
						<div
                            className="hiddenMenu"
                            
							style={
								hiddenMenu == tile ? { display: 'block' } : { display: 'none' }
							}
						>
                            <div className="close" onClick={handleClose}>close</div>
                            <form onSubmit={handleSet}>
                                submit title for your task report
                                <input type="text" placeholder="title" value={inputValue} onChange={handleChange}/>
                                <button type="submit">set</button>
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
