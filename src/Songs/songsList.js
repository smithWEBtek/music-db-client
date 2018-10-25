import React from 'react';

const SongsList = (props) => {

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

export default SongsList; 