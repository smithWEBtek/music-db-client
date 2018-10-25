import React, { Component } from 'react';
import './app.css';
// import { Route, Switch } from 'react-router-dom'
import Songs from './songs/songs'
import Collections from './collections/collections'
import Resources from './resources/resources'
import Categories from './categories/categories'

class App extends Component {
	render() {
		return (
			<div>
				<h2>Music DB</h2>
				<hr />
				<Collections />
				<Songs />
				<Categories />
				<Resources />
			</div>
		);
	}
}

export default App
