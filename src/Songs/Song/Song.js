import React from 'react';
import './Song.css';

const Song = (props) => {
	return (
		<div className="SongCard">
			<h3>{props.song.title}</h3>
		</div>
	)
}

export default Song;