import React from 'react';
import 'App.css';
import img from './img.jpg';

const App = () => (
	<div>
		<h1 className='blue'>Hello React</h1>
		<img src={img} alt='' />
	</div>
);

export default App;
