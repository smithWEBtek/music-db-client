import React from 'react';
import './resources.css';

const Resource = (props) => {
	return (
		<div className="ResourceCard">
			{props.resource.name}
		</div>
	)
}

export default Resource;