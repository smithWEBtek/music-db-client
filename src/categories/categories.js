import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions/categoryActions';
import Category from './category';
import './categories.css'

class Categories extends Component {

	componentDidMount() {
		this.props.onFetchCategories()
	}

	render() {

		const categoriesList = this.props.categories.map((song, index) => {
			return (
				<Category
					key={index}
					song={song}
				/>
			)
		})

		return (
			<div>
				<h4>Categories</h4>
				{categoriesList}
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		categories: state.cat.categories
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onFetchCategories: () => dispatch(actions.fetchCategories())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories)