import * as ActionTypes from './actionTypes'
import ResourceService from '../services/resourceService'

//-----FETCH RESOURCES ACTIONS-----------------------------
export const fetchResourcesStart = () => {
	return { type: ActionTypes.FETCH_RESOURCES_START }
}
export const fetchResourcesSuccess = (resources) => {
	return { type: ActionTypes.FETCH_RESOURCES_SUCCESS, resourcesList: resources }
}
export const fetchResourcesFail = (error) => {
	return { type: ActionTypes.FETCH_RESOURCES_FAIL, error: error }
}
export const fetchResources = () => {
	return dispatch => {
		dispatch(fetchResourcesStart())
		ResourceService.fetchResources()
			.then(response => {
				dispatch({ type: ActionTypes.FETCH_RESOURCES, resourcesList: response })
				dispatch(fetchResourcesSuccess())
			})
			.catch(error => {
				dispatch(fetchResourcesFail(error))
			})
	}
}
