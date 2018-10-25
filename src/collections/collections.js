import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions/collectionActions';
import Collection from './collection';

class Collections extends Component {

	componentDidMount() {
		this.props.onFetchCollections()
	}

	render() {

		const collectionsList = this.props.collections.map((collection, index) => {
			return (
				<Collection
					key={index}
					collection={collection}
				/>
			)
		})

		return (
			<div>
				<h4>Collections</h4>
				{collectionsList}
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		collections: state.col.collections
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onFetchCollections: () => dispatch(actions.fetchCollections())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Collections)