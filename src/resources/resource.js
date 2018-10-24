import React from 'react';
import './resources.css';
import SongList from '../songs/songList'

const Resource = (props) => {
	return (
		<div className="ResourceCard">
			{props.resource.name}
		</div>
	)
}

export default Resource;