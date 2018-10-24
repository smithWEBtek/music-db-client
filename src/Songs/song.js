import React from 'react';
import './songs.css';

const Song = (props) => {
	return (
		<div className="SongCard">
			{props.song.title}
		</div>
	)
}

export default Song;