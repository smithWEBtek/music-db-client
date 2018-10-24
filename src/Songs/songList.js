import React from 'react';

const SongList = (props) => {

	const list = props.songs.map((song, index) => {
		return (
			<div key={index}>
				{song.title}
			</div>
		)
	})

	return (
		<div>
			{list}
		</div>
	)
}

export default SongList; 