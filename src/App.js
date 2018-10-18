import React, { Component } from 'react';
import './App.css';
// import { Route, Switch } from 'react-router-dom'
import Songs from './Songs/songs'

class App extends Component {
	render() {
		return (
			<div className="App">
				<hr />
				<hr />
				<hr />
				<hr />
				<hr />
				<h1>Music DB</h1>
				<hr />
				<hr />
				<hr />
				<hr />
				<hr />
				<Songs />
			</div>
		);
	}
}


export default App
