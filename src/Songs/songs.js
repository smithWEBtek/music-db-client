import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions/songActions';
import Song from './Song/Song';

class Songs extends Component {

	componentDidMount() {
		this.props.onFetchSongs()
	}

	render() {

		const songsList = this.props.songs.map((s, i) => {
			return (
				<Song
					key={i}
					song={s}
				/>
			)
		})

		return (
			<div>
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