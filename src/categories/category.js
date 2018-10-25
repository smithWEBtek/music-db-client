import React from 'react';
import './categories.css';

const Category = (props) => {
	return (
		<div className="CategoryCard">
			{props.song.title}
		</div>
	)
}

export default Category;