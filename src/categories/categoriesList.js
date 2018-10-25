import React from 'react';

const CategoriesList = (props) => {

	const list = props.categories.map((category, index) => {
		return (
			<div key={index}>
				{category.name}
			</div>
		)
	})

	return (
		<div>
			{list}
		</div>
	)
}

export default CategoriesList; 