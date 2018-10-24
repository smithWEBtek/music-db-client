import React from 'react';
import './collection.css';

const Collection = (props) => {
	return (
		<div className="CollectionCard">
			<h3>{props.collection.name}</h3>
		</div>
	)
}

export default Collection;