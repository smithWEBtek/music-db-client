import * as actionTypes from '../actions/actionTypes';

const initialState = {
	resources: [
		{ song_id: 1, name: 'Bittersweet Blues', format: 'pdf', description: 'pdf of tune', location: 'storage' },
		{ song_id: 2, name: 'Blue Skies', format: 'pdf', description: 'pdf of tune', location: 'storage' },
		{ song_id: 3, name: 'Agua de Beber', format: 'pdf', description: 'pdf of tune', location: 'storage' },
		{ song_id: 4, name: 'Summertime', format: 'pdf', description: 'pdf of tune', location: 'storage' },
		{ song_id: 5, name: 'Honey', format: 'pdf', description: 'pdf of tune', location: 'storage' },
	],
	error: false,
	loading: false,
	message: ''
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		// --FETCH RESOURCES------------------------------------

		case actionTypes.FETCH_RESOURCES_START:
			return Object.assign({}, state, { loading: true })

		case actionTypes.FETCH_RESOURCES_SUCCESS:
			return Object.assign({}, state, { loading: false })

		case actionTypes.FETCH_RESOURCES_FAIL:
			return Object.assign({}, state, {
				error: action.error,
				loading: false,
				message: action.type
			})

		case actionTypes.FETCH_RESOURCES:
			const resources = action.resourcesList
			return Object.assign({}, state, {
				resources: resources
			})
		//----- DEFAULT --------------------------------
		default:
			return state;
	}
}

export default reducer;