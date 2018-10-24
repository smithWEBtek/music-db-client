import React from 'react';
import './collections.css';

const Collection = (props) => {
	return (
		<div className="CollectionRow">
			{props.collection.name}
		</div>
	)
}

export default Collection;