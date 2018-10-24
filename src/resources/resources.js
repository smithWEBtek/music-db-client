import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions/resourceActions';
import Resource from './resource';
import './resources.css'

class Resources extends Component {

	componentDidMount() {
		this.props.onFetchResources()
	}

	render() {

		const resourcesList = this.props.resources.map((resource, index) => {
			return (
				<Resource
					key={index}
					resource={resource}
				/>
			)
		})

		return (
			<div>
				{resourcesList}
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		resources: state.sng.resources
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onFetchResources: () => dispatch(actions.fetchResources())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Resources)