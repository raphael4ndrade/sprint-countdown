import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import './countdown.css';

import SVGCircle from './SVGCircle';
import { mapNumber } from '../radiusHelper';
import SettingButton from './SettingButton';

const CountDown = ({ timeUntilDate }) => {
	const [days, setDays] = useState(undefined);
	const [hours, setHours] = useState(undefined);
	const [min, setMin] = useState(undefined);
	const [sec, setSec] = useState(undefined);

	useEffect(() => {
		function timer() {
			setInterval(() => {
				const now = new Date();
				const countdown = timeUntilDate - now;

				setDays(format(countdown, 'd'));
				setHours(format(countdown, 'H'));
				setMin(format(countdown, 'm'));
				setSec(format(countdown, 's'));
			}, 1000);
        }
        
        timer();

		return clearInterval(timer);
	});

	const daysRadius = mapNumber(days, 30, 0, 0, 360);
	const hoursRadius = mapNumber(hours, 24, 0, 0, 360);
	const minutesRadius = mapNumber(min, 60, 0, 0, 360);
	const secondsRadius = mapNumber(sec, 60, 0, 0, 360);

	return (
		<div>
			<div>
				<h1>Sprint CountDown</h1>
				<SettingButton onClick={() => console.log('opening settings')}/>
			</div>
			<div className="countdown-wrapper">
				{days && (
					<div className="countdown-item">
						<SVGCircle radius={daysRadius} />
						{days}
						<span>days</span>
					</div>
				)}
				{hours && (
					<div className="countdown-item">
						<SVGCircle radius={hoursRadius} />
						{hours}
						<span>hours</span>
					</div>
				)}
				{min && (
					<div className="countdown-item">
						<SVGCircle radius={minutesRadius} />
						{min}
						<span>minutes</span>
					</div>
				)}
				{sec && (
					<div className="countdown-item">
						<SVGCircle radius={secondsRadius} />
						{sec}
						<span>seconds</span>
					</div>
				)}
			</div>
		</div>
	);
};

export default CountDown;
