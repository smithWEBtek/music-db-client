import React, { Component } from 'react';
import './app.css';
// import { Route, Switch } from 'react-router-dom'
import Songs from './songs/songs'
import Collections from './collections/collections'

class App extends Component {
	render() {
		return (
			<div>
				<h1>Music DB</h1>
				<hr />
				<hr />
				<Collections />
				<hr />
				<hr />
				<Songs />
			</div>
		);
	}
}

export default App
