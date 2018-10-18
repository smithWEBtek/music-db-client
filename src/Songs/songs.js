import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from '../store/actions/songActions'

class Songs extends Component {
	state = {
		title: 'My Song',
		genre: 'Funk'
	}

	render() {
		const songsList = this.props.songs.songs.map((s, i) => {
			return (
				<div key={i}>
					<p>{s.title}</p>
				</div>
			)
		})

		return (
			<div>
				<p>this is the Songs component</p>
				{songsList}
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		songs: state.sng
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onFetchSongs: () => dispatch(actions.fetchSongs())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Songs)