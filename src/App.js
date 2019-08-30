import React from 'react';

import CountDown from './components/CountDown';

const _style = {
	display: 'flex',
	justifyContent: 'center',
	position:'relative',
	top: '30%',
  	margin: '0 auto',
}

function App() {
	return (
		<div style={_style}>
			<CountDown timeUntilDate={new Date(2109, 8, 30)} />
		</div>
	);
}

export default App;
