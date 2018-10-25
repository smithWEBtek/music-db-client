import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions/songActions';
import Song from './song';
import './songs.css'

class Songs extends Component {

	componentDidMount() {
		this.props.onFetchSongs()
	}

	render() {

		const songsList = this.props.songs.map((song, index) => {
			return (
				<Song
					key={index}
					song={song}
				/>
			)
		})

		return (
			<div>
				<h4>Songs</h4>
				{songsList}
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		songs: state.sng.songs
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onFetchSongs: () => dispatch(actions.fetchSongs())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Songs)