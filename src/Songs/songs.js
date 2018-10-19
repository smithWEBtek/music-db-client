import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from '../store/actions/songActions'

class Songs extends Component {

	componentDidMount() {
		this.props.onFetchSongs()
	}

	render() {

		const songsList = this.props.songs.map((s, i) => {
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
		songs: state.sng.songs
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onFetchSongs: () => dispatch(actions.fetchSongs())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Songs)