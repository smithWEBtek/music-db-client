import * as ActionTypes from './actionTypes'
import CollectionService from '../services/collectionService'

//-----FETCH COLLECTIONS ACTIONS-----------------------------
export const fetchCollectionsStart = () => {
	return { type: ActionTypes.FETCH_COLLECTIONS_START }
}
export const fetchCollectionsSuccess = (collections) => {
	return { type: ActionTypes.FETCH_COLLECTIONS_SUCCESS, collectionsList: collections }
}
export const fetchCollectionsFail = (error) => {
	return { type: ActionTypes.FETCH_COLLECTIONS_FAIL, error: error }
}
export const fetchCollections = () => {
	return dispatch => {
		dispatch(fetchCollectionsStart())
		CollectionService.fetchCollections()
			.then(response => {
				dispatch({ type: ActionTypes.FETCH_COLLECTIONS, collectionsList: response })
				dispatch(fetchCollectionsSuccess())
			})
			.catch(error => {
				dispatch(fetchCollectionsFail(error))
			})
	}
}
