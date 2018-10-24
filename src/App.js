import React, { Component } from 'react';
import './app.css';
// import { Route, Switch } from 'react-router-dom'
import Songs from './songs/songs'
import Collections from './collections/collections'

class App extends Component {
	render() {
		return (
			<div>
				<h2>Music DB</h2>
				<hr />
				<h4>Collections</h4>
				<Collections />
				<hr />
				<hr />
				<h4>Songs</h4>
				<Songs />
			</div>
		);
	}
}

export default App
