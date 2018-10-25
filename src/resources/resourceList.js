import React from 'react';

const ResourceList = (props) => {

	const list = props.resources.map((resource, index) => {
		return (
			<div key={index}>
				{resource.name}
			</div>
		)
	})

	return (
		<div>
			{list}
		</div>
	)
}

export default ResourceList; 